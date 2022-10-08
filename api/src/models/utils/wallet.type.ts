export type WalletAttributes = {
  id: number,
  publicKey: string,
  privateKey: string,
  type: 'self' | 'chief' | 'hr' | 'corporate'
}