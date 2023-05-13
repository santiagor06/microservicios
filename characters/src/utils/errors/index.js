class ClientError extends Error {
  constructor(mesagge, statusCode) {
    super(mesagge);
    this.statusCode = statusCode;
  }
}
module.exports = ClientError;
