export interface Conta {
    id: number,
    numero: string,
    agencia: string,
    saldo: number,
    cliente: number,
    nomeCliente: string
}

export interface SaqueDeposito {
    valor: number,
    conta: number
}

export interface Transferencia {
    conta_origem: number,
    valor: number,
    conta_destino: number
}
