import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Menu, X, Phone, MessageCircle, Users, DollarSign, Building2, Zap, Play, Mail, Instagram, Youtube } from 'lucide-react'
import './App.css'

// Importar assets
import customerServiceIcon from './assets/icons/customer-service.png'
import affordablePriceIcon from './assets/icons/affordable-price.jpg'
import smallBusinessIcon from './assets/icons/small-business.jpg'
import fastProcessIcon from './assets/icons/fast-process.jpg'
import whatsappIcon from './assets/icons/whatsapp.png'
import heroImage from './assets/images/hero-bg.jpg'
import evoluaLogo from './assets/evolua-logo.png'

function App() {
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
              <img 
                src={evoluaLogo} 
                alt="Evolua Contabilidade Digital" 
                className="h-8 w-auto"
              />
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
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-primary transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-primary transition-colors">
                Contato
              </button>
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
                <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('contato')} className="block px-3 py-2 text-gray-700 hover:text-primary">
                  Contato
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 hero-bg min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Contabilidade <span className="evolua-green">inteligente</span>, prática e sem enrolação.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Aqui seu dinheiro vale mais. Inovação, tecnologia e atendimento humanizado por chamados ou WhatsApp.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-evolua-green hover:bg-evolua-green-dark text-white px-8 py-3 text-lg"
                  onClick={() => window.open(atendimentoLink, '_blank')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Acessar Atendimento
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-evolua-green text-evolua-green hover:bg-evolua-green hover:text-white px-8 py-3 text-lg"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar pelo WhatsApp
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

      {/* Por que a Evolua? */}
      <section id="servicos" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que a <span className="evolua-green">Evolua</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra os diferenciais que fazem da Evolua a melhor escolha para sua contabilidade digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Atendimento 100% online */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-evolua-green/10 rounded-full flex items-center justify-center">
                  <img src={customerServiceIcon} alt="Atendimento Online" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Atendimento 100% Online</h3>
                <p className="text-gray-600">
                  Suporte completo via plataforma digital e WhatsApp, sem necessidade de deslocamento.
                </p>
              </CardContent>
            </Card>

            {/* Planos acessíveis */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-evolua-green/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 evolua-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Planos Acessíveis</h3>
                <p className="text-gray-600">
                  Preços justos e transparentes, pensados especialmente para pequenos negócios.
                </p>
              </CardContent>
            </Card>

            {/* Foco em pequenas empresas */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-evolua-green/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 evolua-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Foco em Pequenas Empresas</h3>
                <p className="text-gray-600">
                  Especialistas em MEI, autônomos e pequenos empresários. Entendemos suas necessidades.
                </p>
              </CardContent>
            </Card>

            {/* Plataforma simples e rápida */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-evolua-green/10 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 evolua-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Plataforma Simples e Rápida</h3>
                <p className="text-gray-600">
                  Interface intuitiva e processos automatizados para máxima eficiência.
                </p>
              </CardContent>
            </Card>

            {/* Suporte via chamados ou WhatsApp */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-evolua-green/10 rounded-full flex items-center justify-center">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Suporte Múltiplo</h3>
                <p className="text-gray-600">
                  Atendimento via chamados na plataforma ou WhatsApp, como preferir.
                </p>
              </CardContent>
            </Card>

            {/* Tecnologia e Inovação */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-evolua-green/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 evolua-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Atendimento Humanizado</h3>
                <p className="text-gray-600">
                  Tecnologia avançada com o toque humano que seu negócio merece.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Vídeos */}
      <section id="videos" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aprenda a cuidar da sua empresa com quem <span className="evolua-green">entende</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conteúdo educativo semanal para ajudar você a gerir melhor seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder para vídeos - será atualizado pelo cliente */}
            {[1, 2, 3, 4, 5, 6].map((video) => (
              <Card key={video} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
                  <Play className="w-12 h-12 text-gray-400" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-evolua-green hover:bg-evolua-green-dark">
                      <Play className="w-4 h-4 mr-2" />
                      Assistir
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Vídeo Educativo {video}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Conteúdo será adicionado semanalmente pelo cliente.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-evolua-green text-evolua-green hover:bg-evolua-green hover:text-white"
              onClick={() => window.open('https://youtube.com/@evolua', '_blank')}
            >
              <Youtube className="mr-2 h-5 w-5" />
              Ver Todos os Vídeos
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Evolua */}
      <section id="sobre" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Mais do que contabilidade, entregamos <span className="evolua-green">evolução</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Nossa missão é democratizar o acesso a serviços contábeis profissionais e simples, 
                  transformando a forma como pequenos empresários, autônomos e MEIs cuidam de suas finanças.
                </p>
                <p>
                  Acreditamos que a contabilidade deve ser um aliado estratégico do seu negócio, 
                  não apenas uma obrigação. Por isso, combinamos tecnologia de ponta com atendimento 
                  humanizado para oferecer soluções que realmente fazem a diferença.
                </p>
                <p>
                  Na Evolua, cada cliente é único e merece um serviço personalizado que atenda 
                  suas necessidades específicas. Estamos aqui para fazer sua empresa evoluir.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-evolua-green/10 rounded-lg p-8 text-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 mx-auto bg-evolua-green rounded-full flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nossa Filosofia</h3>
                  <p className="text-gray-600">
                    Inovação, transparência e compromisso com o sucesso dos nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer id="contato" className="bg-gray-900 text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo e descrição */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold evolua-green">Evolua</h3>
              <p className="text-gray-300">
                Contabilidade Digital inteligente, prática e sem enrolação.
              </p>
            </div>

            {/* Contatos */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contatos</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 97166-7554</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@evolua.com.br</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-evolua-green text-evolua-green hover:bg-evolua-green hover:text-white"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-evolua-green hover:border-evolua-green"
                  onClick={() => window.open('https://instagram.com/evolua', '_blank')}
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-evolua-green hover:border-evolua-green"
                  onClick={() => window.open('https://youtube.com/@evolua', '_blank')}
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              Evolua Contabilidade Digital – Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

