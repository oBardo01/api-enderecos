const pool = require('../config/db')

function formataCEP(cep) {
    if(cep.length === 8){
        return cep.slice(0, 5) + '-' + cep.slice(5);
    }
    return cep;
}

exports.criarEndereco = async (req, res) => {          // Rota para cirar endereço 👍
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

exports.listarTodosOsEnderecos = async (req, res) => {          // Rota para listar todos os endereços 👍
    try {
        const result = await pool.query(`SELECT id, enderecoCompleto FROM ENDERECOS`)
        res.status(201).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar enderecos"})
    }
}

exports.buscarEndereco = async (req, res) => {          // Rota para fazer uma busca de endereço 👍
    const {busca} = req.query

    if(!busca) {
        return res.status(400).json({message: "O parâmetro é obrigatório"})
    }

    try {
        const result = await pool.query(`SELECT id, enderecoCompleto FROM ENDERECOS WHERE enderecoCompleto ilike $1`,
        [`%${busca}%`]
        )

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Nenhum endereço encontrado" });
        }

        res.json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar endereco"})
    }
}

exports.buscarEnderecoFiltrado = async (req, res) => {          // Rota para buscar endereço filtrado 👍
    const {filtro} = req.params
    const {busca} = req.query

    console.log('Filtro recebido:', filtro);
    console.log('Busca recebida:', busca);

    if(!busca) {
        return res.status(400).json({message: "O parâmetro é obrigatório"})
    }

    try {
        const result = await pool.query(`SELECT enderecoCompleto FROM ENDERECOS WHERE ${filtro} ilike $1`,
        [`%${busca}%`]
        )

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Nenhum endereço encontrado" });
        }

        res.json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel listar endereco"})
    }
}

exports.atualizarEndereco = async (req, res) => {           // Rota para atualizar os dados de um endereço 👍
    const {id} = req.params
    const {campo, valor} = req.body
    console.log(req.body)

    try {
        const result = await pool.query(
            `UPDATE ENDERECOS Set ${campo} = $1 WHERE id = $2`,
            [valor, id]
        )
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({Message: "Impossivel ele endereco"})
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