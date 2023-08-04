import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your Supabase project API URL and public key
const supabaseUrl = 'https://tsyvoegjsbdpfoxohzzt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzeXZvZWdqc2JkcGZveG9oenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5NzA0ODcsImV4cCI6MjAwNjU0NjQ4N30.0-GhTKIW_se4pdqssABp71OGxcKgffV_o7kiJ8GPr9U';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };