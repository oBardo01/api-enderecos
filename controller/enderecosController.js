const pool = require('../config/db')

exports.criarEndereco = async (req, res) => {
    const {rua, cep, bairro, cidade, estado, pais} = req.body
    const enderecoCompleto = `${rua}, ${bairro} ${cep} - ${cidade}, ${estado} , ${pais},`
    
    try {
        const result = await pool.query(
        `INSERT INTO enderecos (enderecoCompleto, rua, cep, bairro, cidade, estado, pais) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [enderecoCompleto, rua, cep, bairro, cidade, estado, pais]
    )
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel criar endereco"})
    }
}

exports.listarTodosOsEnderecos = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM ENDERECOS`)
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar enderecos"})
    }
}

exports.buscarEndereco = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM ENDERECOS `)
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar enderecos"})
    }
}