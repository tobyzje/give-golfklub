import { sql } from '@vercel/postgres'

export const db = {
  async query(query: string, values: any[] = []) {
    try {
      const result = await sql.query(query, values)
      return result.rows
    } catch (error) {
      console.error('Database error:', error)
      throw error
    }
  }
} 