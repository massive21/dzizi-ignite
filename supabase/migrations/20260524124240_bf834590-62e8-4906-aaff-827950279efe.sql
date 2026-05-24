
DROP POLICY "Anyone can submit a contact request" ON public.contact_submissions;
CREATE POLICY "Anyone can submit a valid contact request"
  ON public.contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 200
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(message) BETWEEN 1 AND 5000
    AND (phone IS NULL OR char_length(phone) <= 40)
    AND (company IS NULL OR char_length(company) <= 200)
  );
