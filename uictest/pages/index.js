import Head from 'next/head'
import styles from '../styles/Home.module.css'
const db = require('../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    
  var result = await db.query(escape`
    SELECT *
    FROM UICDATA
  `)
  res.status(200).json(result)
}

export default function Home() {
  
  //var outputString = "Grant hates Obamacare."
  
  return (
    <div>
      <h2>{result}</h2>
    </div>
  )
}
