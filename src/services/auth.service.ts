import { SupabaseData } from "@/models/supabase-data";
import { AuthError, createClient } from "@supabase/supabase-js";
const { SUPABASE_URL, SUPABASE_TOKEN } = process.env
if (!SUPABASE_TOKEN || !SUPABASE_URL)
    throw new Error("Internal server error due to DB connection")
const supabase = createClient(SUPABASE_URL, SUPABASE_TOKEN)

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