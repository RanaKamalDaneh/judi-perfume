import { createClient } from '@supabase/supabase-js';
// Add to package.json: npm install @supabase/supabase-js


const supabaseUrl = 'https://cgzbiekaukcbawiocmvr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnemJpZWthdWtjYmF3aW9jbXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NTkyMDYsImV4cCI6MjA2NTEzNTIwNn0.wkNP1yjltdEblNXV1RV30RmhRj8pjRosXlfinYjUGN4';

export const supabase = createClient(supabaseUrl, supabaseKey);