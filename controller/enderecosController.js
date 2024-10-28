const pool = require('../config/db')

exports.criarEndereco = async (req, res) => {
    const {rua, cep, bairro, cidade, estado, pais} = req.body
    const enderecoCompleto = `${rua}, ${bairro}, ${cidade} ${cep} - ${estado} , ${pais}`
    
    try {
        const result = await pool.query(
        `INSERT INTO enderecos (enderecoCompleto, rua, cep, bairro, cidade, estado, pais) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [enderecoCompleto, rua, cep, bairro, cidade, estado, pais]
    )
    res.status(201).json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel criar endereco"})
    }
}

exports.listarTodosOsEnderecos = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM ENDERECOS`)
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar enderecos"})
    }
}

exports.buscarEndereco = async (req, res) => {
    const {busca} = req.params

    try {
        const result = await pool.query(`SELECT * FROM ENDERECOS WHERE enderecoCompleto = %${busca}%`)
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar endereco"})
    }
}