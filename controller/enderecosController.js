const pool = require('../config/db')

function formataCEP(cep) {
    if(cep.length === 8){
        return cep.slice(0, 5) + '-' + cep.slice(5);
    }
    return cep;
}

exports.criarEndereco = async (req, res) => {
    const {rua, cep, bairro, cidade, estado, pais} = req.body
    
    try {
        const result = await pool.query(
        `INSERT INTO enderecos (rua, cep, bairro, cidade, estado, pais) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [rua, formataCEP(cep), bairro, cidade, estado, pais]
    )
    res.status(201).json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel criar endereco"})
    }
}

exports.listarTodosOsEnderecos = async (req, res) => {
    try {
        const result = await pool.query(`SELECT id, enderecoCompleto FROM ENDERECOS`)
        res.status(201).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar enderecos"})
    }
}

exports.buscarEndereco = async (req, res) => {
    const {busca} = req.params.query

    try {
        const result = await pool.query(`SELECT id, enderecoCompleto FROM ENDERECOS WHERE enderecoCompleto ilike $1`,
        [`%${busca}%`]
        )
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar endereco"})
    }
}

exports.atualizarEndereco = async (req, res) => {
    const {campo, valor, id} = req.body
    console.log(req.body)

    try {
        const result = await pool.query(
            `UPDATE ENDERECOS Set %${campo}% = ${valor} WHERE ID = ${id}`
        )
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel atualizar endereco"})
    }
}


exports.deletarEndereco = async (req, res) => {
    const {id} = req.body

    try {
        const result = await pool.query(`UPDATE ENDERECOS Set = %${busca}% WHERE ID = ${id}`)
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel atualizar endereco"})
    }
}