import { SupabaseData } from "@/models/supabase-data";
import { AuthError, AuthTokenResponsePassword, createClient } from "@supabase/supabase-js";


const { VITE_SUPABASE_URL, VITE_SUPABASE_TOKEN } = import.meta.env

if (!VITE_SUPABASE_TOKEN || !VITE_SUPABASE_URL)
    throw new Error("Internal server error due to DB connection")
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_TOKEN)

export const signup = async (email: string, password: string): Promise<{ data: SupabaseData; error: AuthError | null }> => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: 'https://example.com/welcome'
        }
    });
    return { data, error };
}

export const signin = async (email: string, password: string): Promise<AuthTokenResponsePassword> => {
    const data = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });
    return data;
}