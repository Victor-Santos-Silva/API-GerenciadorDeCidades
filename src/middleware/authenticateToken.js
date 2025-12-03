function autenticateToken(req, res, next) {
  // Extrai o token do cabeçalho Authorization
  const tokenEnviado = req.headers["authorization"]?.split(" ")[1];

  // Verifica se o token foi enviado
  if (!tokenEnviado) {
    return res.status(401).json({
      msg: "Acesso negado. Token não enviado.",
    });
  }

  // Verifica se o token é válido
  const tokenFixo = process.env.API_TOKEN;

  // Verificação do token
  if (tokenEnviado !== tokenFixo) {
    return res.status(403).json({
      msg: "Acesso negado. Token inválido.",
    });
  }

  // Token válido, prossegue para o próximo middleware ou rota
  next();
}

module.exports = autenticateToken;
