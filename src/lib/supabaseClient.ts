import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project's URL and public anon key
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// TypeScript interface for the database schema
interface Database {
  public: {
    Tables: {
      certificates: {
        Row: {
          id: string;
          user_id: string;
          ipfs_hash: string;
          issued_by: string;
          issued_on: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          ipfs_hash: string;
          issued_by: string;
          issued_on?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          ipfs_hash?: string;
          issued_by?: string;
          issued_on?: string;
        };
      };
      users_points: {
        Row: {
          user_id: string;
          points: number;
        };
        Insert: {
          user_id: string;
          points: number;
        };
        Update: {
          user_id?: string;
          points?: number;
        };
      };
      leaderboards: {
        Row: {
          id: string;
          user_id: string;
          points: number;
        };
        Insert: {
          id?: string;
          user_id: string;
          points: number;
        };
        Update: {
          id?: string;
          user_id?: string;
          points?: number;
        };
      };
      airdrops: {
        Row: {
          id: string;
          user_id: string;
          keywords_detected: string[];
          airdropped: boolean;
        };
        Insert: {
          id?: string;
          user_id: string;
          keywords_detected: string[];
          airdropped?: boolean;
        };
        Update: {
          id?: string;
          user_id?: string;
          keywords_detected?: string[];
          airdropped?: boolean;
        };
      };
    };
  };
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
