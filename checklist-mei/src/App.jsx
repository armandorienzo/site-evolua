import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Check, ArrowLeft, CreditCard, AlertCircle, CheckCircle2 } from 'lucide-react'
import './App.css'

// Importar assets
import evoluaLogo from './assets/evolua-logo.png'

function App() {
  // Estado para controlar quais itens do checklist foram marcados
  const [checkedItems, setCheckedItems] = useState({
    faturamento: false,
    das: false,
    notaFiscal: false,
    documentos: false,
    funcionario: false
  })

  // Lista dos itens do checklist
  const checklistItems = [
    {
      id: 'faturamento',
      text: 'Estou ciente de que o limite de faturamento do MEI é de R$ 81.000,00 por ano.',
      icon: <AlertCircle className="w-5 h-5 text-orange-500" />
    },
    {
      id: 'das',
      text: 'Sei que devo pagar o DAS até o dia 20 de cada mês para evitar juros, multa e exclusão do MEI.',
      icon: <AlertCircle className="w-5 h-5 text-red-500" />
    },
    {
      id: 'notaFiscal',
      text: 'Estou ciente de que devo emitir nota fiscal sempre que prestar serviços para empresas (pessoas jurídicas).',
      icon: <AlertCircle className="w-5 h-5 text-blue-500" />
    },
    {
      id: 'documentos',
      text: 'Comprometo-me a enviar mensalmente os extratos bancários, notas fiscais emitidas/recebidas e demais documentos da empresa para a contabilidade.',
      icon: <AlertCircle className="w-5 h-5 text-purple-500" />
    },
    {
      id: 'funcionario',
      text: 'Estou ciente de que o MEI pode ter no máximo 1 funcionário com registro em carteira. No momento, estou contratando o plano exclusivo para MEI sem funcionário, e me comprometo a informar imediatamente à contabilidade caso venha a contratar. Nessa hipótese, a mensalidade será reajustada automaticamente para R$ 150,00 a partir do mês da contratação.',
      icon: <AlertCircle className="w-5 h-5 text-green-500" />
    }
  ]

  // Função para alternar o estado de um item do checklist
  const toggleCheckItem = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  // Verificar se todos os itens foram marcados
  const allItemsChecked = Object.values(checkedItems).every(checked => checked)
  const checkedCount = Object.values(checkedItems).filter(checked => checked).length

  // Link da Vindi (placeholder - será fornecido pelo cliente)
  const vindiLink = "https://evolua.vindi.com.br/checkout/mei-contabilidade"

  // Função para redirecionar para contratação
  const handleContratacao = () => {
    if (allItemsChecked) {
      window.open(vindiLink, '_blank')
    }
  }

  // Função para voltar ao site principal
  const voltarSitePrincipal = () => {
    window.open('https://dlmcwinh.manus.space', '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={evoluaLogo} 
                alt="Evolua Contabilidade Digital" 
                className="h-8 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900">Contabilidade Digital</h1>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={voltarSitePrincipal}
              className="border-evolua-green text-evolua-green hover:bg-evolua-green hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Site
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Checklist obrigatório antes de contratar nossa contabilidade para <span className="text-evolua-green">MEI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Para garantir o melhor atendimento e evitar problemas futuros, é importante que você esteja ciente de suas responsabilidades como MEI.
          </p>
          
          {/* Progress Indicator */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progresso</span>
              <span>{checkedCount}/5 itens</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-evolua-green h-2 rounded-full transition-all duration-300"
                style={{ width: `${(checkedCount / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="space-y-6">
              {checklistItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`checklist-item ${checkedItems[item.id] ? 'checked' : ''}`}
                  onClick={() => toggleCheckItem(item.id)}
                >
                  <div className={`checkbox-custom ${checkedItems[item.id] ? 'checked' : ''}`}>
                    {checkedItems[item.id] && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  
                  {checkedItems[item.id] && (
                    <CheckCircle2 className="w-5 h-5 text-evolua-green flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status Message */}
        {!allItemsChecked && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <p className="text-yellow-800">
                <strong>Atenção:</strong> Você precisa marcar todos os itens do checklist antes de prosseguir com a contratação.
              </p>
            </div>
          </div>
        )}

        {allItemsChecked && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800">
                <strong>Perfeito!</strong> Você está ciente de todas as responsabilidades. Agora pode prosseguir com a contratação.
              </p>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className={`px-12 py-4 text-xl font-semibold shadow-lg transition-all duration-300 ${
              allItemsChecked 
                ? 'bg-evolua-green hover:bg-evolua-green-dark text-white hover:shadow-xl' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleContratacao}
            disabled={!allItemsChecked}
          >
            <CreditCard className="mr-3 h-6 w-6" />
            Quero contratar a contabilidade para MEI
          </Button>
          
          <div className="mt-6 space-y-2">
            <p className="text-gray-600 text-sm">
              Ao clicar no botão acima, você será redirecionado para nossa plataforma de pagamento segura.
            </p>
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <span>✓ Pagamento seguro</span>
              <span>✓ Sem taxa de adesão</span>
              <span>✓ Cancele quando quiser</span>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg p-8 border">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Por que esse checklist é importante?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Transparência</h4>
              <p>Queremos que você esteja totalmente ciente de suas responsabilidades como MEI antes de contratar nossos serviços.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Qualidade</h4>
              <p>Clientes bem informados nos permitem oferecer um serviço mais eficiente e personalizado.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Conformidade</h4>
              <p>Garantimos que você cumpra todas as obrigações legais e evite problemas com a Receita Federal.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Parceria</h4>
              <p>Construímos uma relação de confiança baseada na transparência e no conhecimento mútuo.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Evolua Contabilidade Digital – Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Contabilidade inteligente, prática e sem enrolação.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

