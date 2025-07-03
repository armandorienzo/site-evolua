// Configuração da API para integração com backend - evoluafinance.com

// URL base da API - configurada para o domínio correto
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'evoluafinance-api-backend-production.up.railway.app'  // URL do backend em produção (ajustar conforme deploy)
  : 'http://localhost:5000'           // URL local para desenvolvimento

// Configuração específica para evoluafinance.com
const SITE_CONFIG = {
  domain: 'www.evoluafinance.com',
  siteName: 'Evolua Finance',
  apiUrl: API_BASE_URL,
  version: '1.1'
}

// Endpoints disponíveis
export const API_ENDPOINTS = {
  CADASTRAR_CLIENTE: `${API_BASE_URL}/api/gclick/cadastrar-cliente`,
  VALIDAR_DADOS: `${API_BASE_URL}/api/gclick/validar-dados`,
  STATUS: `${API_BASE_URL}/api/gclick/status`
}

// Função para fazer requisições à API
export const apiRequest = async (endpoint, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'X-Site-Domain': SITE_CONFIG.domain,
      ...options.headers
    }
  }

  try {
    const response = await fetch(endpoint, {
      ...defaultOptions,
      ...options
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.mensagem || 'Erro na requisição')
    }

    return data
  } catch (error) {
    console.error('Erro na API:', error)
    throw error
  }
}

// Função específica para cadastrar cliente
export const cadastrarCliente = async (dadosCliente) => {
  return apiRequest(API_ENDPOINTS.CADASTRAR_CLIENTE, {
    method: 'POST',
    body: JSON.stringify({
      ...dadosCliente,
      origem: SITE_CONFIG.domain,
      sistema: `${SITE_CONFIG.siteName} - Cadastro Automático`,
      integracao: `Evolua Finance v${SITE_CONFIG.version}`
    })
  })
}

// Função para validar dados
export const validarDados = async (dadosCliente) => {
  return apiRequest(API_ENDPOINTS.VALIDAR_DADOS, {
    method: 'POST',
    body: JSON.stringify(dadosCliente)
  })
}

// Função para verificar status da API
export const verificarStatus = async () => {
  return apiRequest(API_ENDPOINTS.STATUS)
}

export { SITE_CONFIG }

export default {
  API_ENDPOINTS,
  apiRequest,
  cadastrarCliente,
  validarDados,
  verificarStatus,
  SITE_CONFIG
}

