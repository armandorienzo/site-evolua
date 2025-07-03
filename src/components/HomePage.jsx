import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Menu, X, Phone, MessageCircle, Users, DollarSign, Building2, Zap, Play, Mail, Instagram, Youtube, CheckCircle, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

// Importar assets
import customerServiceIcon from '../assets/icons/customer-service.png'
import affordablePriceIcon from '../assets/icons/affordable-price.jpg'
import smallBusinessIcon from '../assets/icons/small-business.jpg'
import fastProcessIcon from '../assets/icons/fast-process.jpg'
import whatsappIcon from '../assets/icons/whatsapp.png'
import heroImage from '../assets/images/hero-bg.jpg'
import evoluaLogo from '../assets/evolua-logo.png'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const whatsappLink = "https://wa.me/5511971667554"
  const atendimentoLink = "#" // Será fornecido pelo usuário

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src={evoluaLogo} 
                  alt="Evolua Contabilidade Digital" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-primary transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-primary transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('videos')} className="text-gray-700 hover:text-primary transition-colors">
                Vídeos
              </button>
              <button onClick={() => scrollToSection('planos')} className="text-gray-700 hover:text-primary transition-colors">
                Planos
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-primary transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-primary transition-colors">
                Contato
              </button>
              <Link to="/cadastro-cliente" className="text-gray-700 hover:text-primary transition-colors">
                Cadastrar Cliente
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Início
                </button>
                <button onClick={() => scrollToSection('servicos')} className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('videos')} className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Vídeos
                </button>
                <button onClick={() => scrollToSection('planos')} className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Planos
                </button>
                <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('contato')} className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Contato
                </button>
                <Link to="/cadastro-cliente" className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Cadastrar Cliente
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Contabilidade inteligente, prática e sem enrolação.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Aqui seu dinheiro vale mais. Inovação, tecnologia e atendimento humanizado por chamados ou WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <a href={atendimentoLink} className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Acessar Atendimento
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <img src={whatsappIcon} alt="WhatsApp" className="mr-2 h-5 w-5" />
                    Falar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Contabilidade Digital" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por que a Evolua Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que a Evolua?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra os diferenciais que fazem da Evolua a melhor escolha para sua contabilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src={customerServiceIcon} alt="Atendimento Online" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atendimento 100% online</h3>
                <p className="text-gray-600">
                  Resolva tudo sem sair de casa através da nossa plataforma digital ou WhatsApp
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src={affordablePriceIcon} alt="Preços Acessíveis" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Planos acessíveis</h3>
                <p className="text-gray-600">
                  Preços justos e transparentes, sem taxas escondidas ou surpresas
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src={smallBusinessIcon} alt="Pequenas Empresas" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Foco em pequenas empresas</h3>
                <p className="text-gray-600">
                  Especialistas em MEI, microempresas e pequenos negócios
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src={fastProcessIcon} alt="Processo Rápido" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Plataforma simples e rápida</h3>
                <p className="text-gray-600">
                  Interface intuitiva que facilita o envio de documentos e acompanhamento
                </p>
              </CardContent>
            </Card>

            {/* Card 5 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Suporte via chamados ou WhatsApp</h3>
                <p className="text-gray-600">
                  Atendimento personalizado através dos canais que você prefere
                </p>
              </CardContent>
            </Card>

            {/* Card 6 */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tecnologia e inovação</h3>
                <p className="text-gray-600">
                  Ferramentas modernas para automatizar processos e reduzir burocracias
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Vídeos */}
      <section id="videos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aprenda a cuidar da sua empresa com quem entende
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conteúdo educativo semanal para você dominar a gestão do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder para vídeos */}
            {[1, 2, 3].map((video) => (
              <Card key={video} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <Play className="w-12 h-12 text-gray-400" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Vídeo Educativo {video}</h3>
                  <p className="text-gray-600 text-sm">
                    Conteúdo será adicionado semanalmente com dicas valiosas para sua empresa.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              👉 Contrate agora sua contabilidade com a Evolua
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparência, praticidade e preço justo para o seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano MEI */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Empresas MEI</h3>
                  <div className="text-4xl font-bold text-primary mb-2">R$ 90,00</div>
                  <p className="text-gray-600">por mês</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Declaração anual MEI</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Emissão de DAS mensal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Suporte via WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Orientações fiscais</span>
                  </li>
                </ul>

                <Link to="/checklist-mei">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Contratar MEI
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Simples Nacional */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </span>
              </div>
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Simples Nacional</h3>
                  <p className="text-sm text-gray-600 mb-3">Prestadora de serviço, 1 nota por mês, sem funcionários e sem pró-labore</p>
                  <div className="text-4xl font-bold text-primary mb-2">R$ 179,00</div>
                  <p className="text-gray-600">por mês</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Declarações obrigatórias</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Apuração de impostos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Emissão de guias</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Suporte completo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Consultoria fiscal</span>
                  </li>
                </ul>

                <Link to="/cadastro-cliente">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Contratar Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre a Evolua
              </h2>
              <div className="text-2xl font-semibold text-primary mb-4">
                "Mais do que contabilidade, entregamos evolução."
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Nossa missão é democratizar o acesso a serviços contábeis profissionais e simples. 
                Acreditamos que toda empresa, independente do tamanho, merece ter uma contabilidade 
                de qualidade, acessível e humanizada.
              </p>
              <p className="text-lg text-gray-600">
                Com tecnologia de ponta e atendimento personalizado, transformamos a complexidade 
                contábil em soluções práticas para o seu negócio crescer.
              </p>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-600">Digital</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24h</div>
                    <div className="text-gray-600">Suporte</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-gray-600">Clientes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5★</div>
                    <div className="text-gray-600">Avaliação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para ajudar sua empresa a evoluir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">(11) 97166-7554</p>
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Conversar Agora
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">contato@evolua.com.br</p>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  Enviar Email
                </Button>
              </CardContent>
            </Card>

            {/* Atendimento */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Plataforma</h3>
                <p className="text-gray-600 mb-4">Sistema de chamados</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href={atendimentoLink}>
                    Acessar Plataforma
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <img 
                src={evoluaLogo} 
                alt="Evolua Contabilidade Digital" 
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 mb-4">
                Contabilidade inteligente, prática e sem enrolação para pequenas empresas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-gray-400 hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('planos')} className="text-gray-400 hover:text-white transition-colors">Planos</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="text-gray-400 hover:text-white transition-colors">Sobre</button></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Phone className="w-4 h-4 inline mr-2" />
                  (11) 97166-7554
                </li>
                <li className="text-gray-400">
                  <Mail className="w-4 h-4 inline mr-2" />
                  contato@evolua.com.br
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              Evolua Contabilidade Digital – Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

