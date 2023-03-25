export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      pokemons: {
        Row: {
          id: number
          image: string | null
          name: string
          pokedex: string
          pokedex_id: number
        }
        Insert: {
          id?: number
          image?: string | null
          name: string
          pokedex: string
          pokedex_id: number
        }
        Update: {
          id?: number
          image?: string | null
          name?: string
          pokedex?: string
          pokedex_id?: number
        }
      }
      user_favorites: {
        Row: {
          created_at: string | null
          pokemon_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          pokemon_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          pokemon_id?: number
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}