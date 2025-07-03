import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { CheckCircle, AlertCircle, User, Building, Phone, Mail, MapPin, Calendar, FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import evoluaLogo from '../assets/evolua-logo.png'

function CadastroClientePage() {
  const [formData, setFormData] = useState({
    tipoInscricao: '',
    inscricao: '',
    nome: '',
    apelido: '',
    tipo: 'FIXO',
    statusComplementarId: 1,
    grupoIds: [1],
    visibilidadeIds: [1],
    sistema: 'Site Evolua',
    integracao: 'Cadastro Automático v1.0',
    dataInicio: new Date().toISOString().split('T')[0],
    nascimento: '',
    observacao: '',
    endereco: {
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      estado: ''
    },
    telefones: [{ tipo: 'celular', numero: '' }],
    emails: [{ tipo: 'principal', email: '' }]
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Validação de CPF
  const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, '')
    if (cpf.length !== 11) return false
    if (/^(\d)\1{10}$/.test(cpf)) return false
    
    let soma = 0
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i)
    }
    let resto = 11 - (soma % 11)
    let digito1 = resto < 2 ? 0 : resto
    
    if (parseInt(cpf.charAt(9)) !== digito1) return false
    
    soma = 0
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i)
    }
    resto = 11 - (soma % 11)
    let digito2 = resto < 2 ? 0 : resto
    
    return parseInt(cpf.charAt(10)) === digito2
  }

  // Validação de CNPJ
  const validarCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]/g, '')
    if (cnpj.length !== 14) return false
    if (/^(\d)\1{13}$/.test(cnpj)) return false
    
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho)
    let digitos = cnpj.substring(tamanho)
    let soma = 0
    let pos = tamanho - 7
    
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) pos = 9
    }
    
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado !== parseInt(digitos.charAt(0))) return false
    
    tamanho = tamanho + 1
    numeros = cnpj.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7
    
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) pos = 9
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    return resultado === parseInt(digitos.charAt(1))
  }

  // Validação de email
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // Validação de telefone
  const validarTelefone = (telefone) => {
    const numeros = telefone.replace(/[^\d]/g, '')
    return numeros.length === 10 || numeros.length === 11
  }

  // Validação de CEP
  const validarCEP = (cep) => {
    const regex = /^\d{5}-?\d{3}$/
    return regex.test(cep)
  }

  // Formatação de CPF
  const formatarCPF = (value) => {
    const numeros = value.replace(/[^\d]/g, '')
    return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  // Formatação de CNPJ
  const formatarCNPJ = (value) => {
    const numeros = value.replace(/[^\d]/g, '')
    return numeros.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }

  // Formatação de telefone
  const formatarTelefone = (value) => {
    const numeros = value.replace(/[^\d]/g, '')
    if (numeros.length === 11) {
      return numeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    } else if (numeros.length === 10) {
      return numeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    }
    return value
  }

  // Formatação de CEP
  const formatarCEP = (value) => {
    const numeros = value.replace(/[^\d]/g, '')
    return numeros.replace(/(\d{5})(\d{3})/, '$1-$2')
  }

  // Validar formulário
  const validarFormulario = () => {
    const newErrors = {}

    // Validações obrigatórias
    if (!formData.tipoInscricao) {
      newErrors.tipoInscricao = 'Tipo de inscrição é obrigatório'
    }

    if (!formData.inscricao) {
      newErrors.inscricao = 'Número da inscrição é obrigatório'
    } else {
      if (formData.tipoInscricao === 'CPF' && !validarCPF(formData.inscricao)) {
        newErrors.inscricao = 'CPF inválido'
      } else if (formData.tipoInscricao === 'CNPJ' && !validarCNPJ(formData.inscricao)) {
        newErrors.inscricao = 'CNPJ inválido'
      }
    }

    if (!formData.nome || formData.nome.length > 64) {
      newErrors.nome = 'Nome é obrigatório e deve ter no máximo 64 caracteres'
    }

    if (!formData.apelido || formData.apelido.length > 64) {
      newErrors.apelido = 'Apelido é obrigatório e deve ter no máximo 64 caracteres'
    }

    if (!formData.dataInicio) {
      newErrors.dataInicio = 'Data de início é obrigatória'
    }

    // Validações opcionais
    if (formData.emails[0].email && !validarEmail(formData.emails[0].email)) {
      newErrors.email = 'Email inválido'
    }

    if (formData.telefones[0].numero && !validarTelefone(formData.telefones[0].numero)) {
      newErrors.telefone = 'Telefone inválido'
    }

    if (formData.endereco.cep && !validarCEP(formData.endereco.cep)) {
      newErrors.cep = 'CEP inválido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Atualizar campo
  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Limpar erro do campo
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }))
    }
  }

  // Atualizar campo aninhado
  const updateNestedField = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }))
  }

  // Atualizar array
  const updateArrayField = (array, index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [array]: prev[array].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  // Submeter formulário
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validarFormulario()) {
      setSubmitStatus({ type: 'error', message: 'Por favor, corrija os erros no formulário' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Importar função da API
      const { cadastrarCliente } = await import('../config/api.js')
      
      // Chamar API Flask para cadastrar cliente
      const result = await cadastrarCliente(formData)

      if (result.sucesso) {
        setSubmitStatus({ 
          type: 'success', 
          message: `Cliente cadastrado com sucesso! ${result.dados?.id ? `ID: #${result.dados.id}` : ''}${result.dados?.simulacao ? ' (Modo simulação)' : ''}` 
        })
        
        // Reset do formulário após sucesso
        setTimeout(() => {
          setFormData({
            tipoInscricao: '',
            inscricao: '',
            nome: '',
            apelido: '',
            tipo: 'FIXO',
            statusComplementarId: 1,
            grupoIds: [1],
            visibilidadeIds: [1],
            sistema: 'Site Evolua',
            integracao: 'Cadastro Automático v1.0',
            dataInicio: new Date().toISOString().split('T')[0],
            nascimento: '',
            observacao: '',
            endereco: {
              cep: '',
              logradouro: '',
              bairro: '',
              cidade: '',
              estado: ''
            },
            telefones: [{ tipo: 'celular', numero: '' }],
            emails: [{ tipo: 'principal', email: '' }]
          })
          setSubmitStatus(null)
        }, 5000)
        
      } else {
        // Erro de validação ou API
        let errorMessage = 'Erro ao cadastrar cliente. Tente novamente.'
        
        if (result.erros && Array.isArray(result.erros)) {
          errorMessage = `Erros de validação: ${result.erros.map(e => e.mensagem).join(', ')}`
        } else if (result.mensagem) {
          errorMessage = result.mensagem
        }
        
        setSubmitStatus({ 
          type: 'error', 
          message: errorMessage
        })
      }
      
    } catch (error) {
      console.error('Erro na requisição:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Erro de conexão. Verifique se o servidor está funcionando.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img src={evoluaLogo} alt="Evolua" className="h-8" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Cadastro de Cliente</h1>
                <p className="text-sm text-gray-600">Sistema de integração com gclick</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {submitStatus && (
          <Alert className={`mb-6 ${submitStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            {submitStatus.type === 'success' ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className={submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {submitStatus.message}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Básicos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <User className="w-5 h-5 mr-2" />
                Dados Básicos
              </CardTitle>
              <CardDescription>
                Informações principais do cliente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tipoInscricao">Tipo de Inscrição *</Label>
                  <Select value={formData.tipoInscricao} onValueChange={(value) => updateField('tipoInscricao', value)}>
                    <SelectTrigger className={errors.tipoInscricao ? 'border-red-300' : ''}>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CPF">CPF - Pessoa Física</SelectItem>
                      <SelectItem value="CNPJ">CNPJ - Pessoa Jurídica</SelectItem>
                      <SelectItem value="CEI">CEI - Cadastro Específico</SelectItem>
                      <SelectItem value="SREG">SREG - Sem Registro</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.tipoInscricao && <p className="text-sm text-red-600 mt-1">{errors.tipoInscricao}</p>}
                </div>

                <div>
                  <Label htmlFor="inscricao">
                    {formData.tipoInscricao === 'CPF' ? 'CPF' : 
                     formData.tipoInscricao === 'CNPJ' ? 'CNPJ' : 
                     'Número da Inscrição'} *
                  </Label>
                  <Input
                    id="inscricao"
                    value={formData.inscricao}
                    onChange={(e) => {
                      let value = e.target.value
                      if (formData.tipoInscricao === 'CPF') {
                        value = formatarCPF(value)
                      } else if (formData.tipoInscricao === 'CNPJ') {
                        value = formatarCNPJ(value)
                      }
                      updateField('inscricao', value)
                    }}
                    placeholder={formData.tipoInscricao === 'CPF' ? '000.000.000-00' : 
                               formData.tipoInscricao === 'CNPJ' ? '00.000.000/0000-00' : 
                               'Digite o número'}
                    className={errors.inscricao ? 'border-red-300' : ''}
                  />
                  {errors.inscricao && <p className="text-sm text-red-600 mt-1">{errors.inscricao}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome Completo / Razão Social *</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => updateField('nome', e.target.value)}
                    placeholder="Digite o nome completo"
                    className={errors.nome ? 'border-red-300' : ''}
                  />
                  {errors.nome && <p className="text-sm text-red-600 mt-1">{errors.nome}</p>}
                </div>

                <div>
                  <Label htmlFor="apelido">Nome Fantasia / Apelido *</Label>
                  <Input
                    id="apelido"
                    value={formData.apelido}
                    onChange={(e) => updateField('apelido', e.target.value)}
                    placeholder="Digite o nome fantasia"
                    className={errors.apelido ? 'border-red-300' : ''}
                  />
                  {errors.apelido && <p className="text-sm text-red-600 mt-1">{errors.apelido}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tipo">Tipo de Cliente</Label>
                  <Select value={formData.tipo} onValueChange={(value) => updateField('tipo', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FIXO">Fixo</SelectItem>
                      <SelectItem value="EVENTUAL">Eventual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dataInicio">Data de Início *</Label>
                  <Input
                    id="dataInicio"
                    type="date"
                    value={formData.dataInicio}
                    onChange={(e) => updateField('dataInicio', e.target.value)}
                    className={errors.dataInicio ? 'border-red-300' : ''}
                  />
                  {errors.dataInicio && <p className="text-sm text-red-600 mt-1">{errors.dataInicio}</p>}
                </div>
              </div>

              {formData.tipoInscricao === 'CPF' && (
                <div>
                  <Label htmlFor="nascimento">Data de Nascimento</Label>
                  <Input
                    id="nascimento"
                    type="date"
                    value={formData.nascimento}
                    onChange={(e) => updateField('nascimento', e.target.value)}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Phone className="w-5 h-5 mr-2" />
                Informações de Contato
              </CardTitle>
              <CardDescription>
                Dados para comunicação com o cliente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Principal</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.emails[0].email}
                    onChange={(e) => updateArrayField('emails', 0, 'email', e.target.value)}
                    placeholder="cliente@email.com"
                    className={errors.email ? 'border-red-300' : ''}
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="telefone">Telefone Principal</Label>
                  <Input
                    id="telefone"
                    value={formData.telefones[0].numero}
                    onChange={(e) => {
                      const formatted = formatarTelefone(e.target.value)
                      updateArrayField('telefones', 0, 'numero', formatted)
                    }}
                    placeholder="(11) 99999-9999"
                    className={errors.telefone ? 'border-red-300' : ''}
                  />
                  {errors.telefone && <p className="text-sm text-red-600 mt-1">{errors.telefone}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Endereço */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <MapPin className="w-5 h-5 mr-2" />
                Endereço
              </CardTitle>
              <CardDescription>
                Localização do cliente (opcional)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    id="cep"
                    value={formData.endereco.cep}
                    onChange={(e) => {
                      const formatted = formatarCEP(e.target.value)
                      updateNestedField('endereco', 'cep', formatted)
                    }}
                    placeholder="00000-000"
                    className={errors.cep ? 'border-red-300' : ''}
                  />
                  {errors.cep && <p className="text-sm text-red-600 mt-1">{errors.cep}</p>}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="logradouro">Logradouro</Label>
                  <Input
                    id="logradouro"
                    value={formData.endereco.logradouro}
                    onChange={(e) => updateNestedField('endereco', 'logradouro', e.target.value)}
                    placeholder="Rua, Avenida, etc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input
                    id="bairro"
                    value={formData.endereco.bairro}
                    onChange={(e) => updateNestedField('endereco', 'bairro', e.target.value)}
                    placeholder="Nome do bairro"
                  />
                </div>

                <div>
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    value={formData.endereco.cidade}
                    onChange={(e) => updateNestedField('endereco', 'cidade', e.target.value)}
                    placeholder="Nome da cidade"
                  />
                </div>

                <div>
                  <Label htmlFor="estado">Estado</Label>
                  <Select value={formData.endereco.estado} onValueChange={(value) => updateNestedField('endereco', 'estado', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                      <SelectItem value="PR">Paraná</SelectItem>
                      <SelectItem value="SC">Santa Catarina</SelectItem>
                      <SelectItem value="BA">Bahia</SelectItem>
                      <SelectItem value="GO">Goiás</SelectItem>
                      <SelectItem value="DF">Distrito Federal</SelectItem>
                      <SelectItem value="ES">Espírito Santo</SelectItem>
                      <SelectItem value="MT">Mato Grosso</SelectItem>
                      <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                      <SelectItem value="PE">Pernambuco</SelectItem>
                      <SelectItem value="CE">Ceará</SelectItem>
                      <SelectItem value="PA">Pará</SelectItem>
                      <SelectItem value="AM">Amazonas</SelectItem>
                      <SelectItem value="RO">Rondônia</SelectItem>
                      <SelectItem value="AC">Acre</SelectItem>
                      <SelectItem value="AP">Amapá</SelectItem>
                      <SelectItem value="RR">Roraima</SelectItem>
                      <SelectItem value="TO">Tocantins</SelectItem>
                      <SelectItem value="MA">Maranhão</SelectItem>
                      <SelectItem value="PI">Piauí</SelectItem>
                      <SelectItem value="AL">Alagoas</SelectItem>
                      <SelectItem value="SE">Sergipe</SelectItem>
                      <SelectItem value="PB">Paraíba</SelectItem>
                      <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Observações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <FileText className="w-5 h-5 mr-2" />
                Observações
              </CardTitle>
              <CardDescription>
                Informações adicionais sobre o cliente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="observacao">Observações Gerais</Label>
                <Textarea
                  id="observacao"
                  value={formData.observacao}
                  onChange={(e) => updateField('observacao', e.target.value)}
                  placeholder="Digite observações sobre o cliente..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Botões de Ação */}
          <div className="flex justify-end space-x-4 pt-6">
            <Link to="/">
              <Button type="button" variant="outline" className="px-8">
                Cancelar
              </Button>
            </Link>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="px-8 bg-green-600 hover:bg-green-700 text-white"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Cadastrando...
                </>
              ) : (
                'Cadastrar Cliente'
              )}
            </Button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img src={evoluaLogo} alt="Evolua" className="h-6" />
              </Link>
              <span className="text-sm text-gray-600">Evolua Contabilidade Digital</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Sistema Integrado
              </Badge>
              <span className="text-xs text-gray-500">v1.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CadastroClientePage

