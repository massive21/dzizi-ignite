
-- Contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a contact request"
  ON public.contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  client TEXT,
  location TEXT,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  completed_at DATE,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Projects are viewable by everyone"
  ON public.projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- Seed a few recent projects
INSERT INTO public.projects (title, client, location, category, description, sort_order, completed_at) VALUES
('Bulk Diesel Storage Installation', 'Major Coffee Estate', 'Nyeri, Kenya', 'Coffee Farms', 'Design and installation of 20,000L bulk diesel storage system serving coffee dryers, generators and estate tractors. Includes dispensing pump and fuel management.', 1, '2025-08-15'),
('Forecourt Upgrade & Branding', 'Independent Fuel Retailer', 'Nakuru, Kenya', 'Fuel Stations', 'Complete forecourt upgrade: new dispensers, underground tank replacement, canopy fabrication and full branding rollout. Delivered EPRA-compliant and on schedule.', 2, '2025-06-10'),
('Hydrostatic Tank Testing', 'Manufacturing Plant', 'Industrial Area, Nairobi', 'Hydrotesting', 'Hydrostatic pressure testing and recertification of three above-ground fuel storage tanks supplying plant boilers and standby generators.', 3, '2025-09-02'),
('Solar Hybrid Power System', 'Gated Community', 'Kiambu, Kenya', 'Solar Solutions', '45kW solar hybrid installation reducing diesel generator runtime by 70%. Battery backup, smart inverters and remote monitoring included.', 4, '2025-04-20'),
('Fleet Refuelling Depot', 'Logistics Operator', 'Mombasa Road, Nairobi', 'Transport & Logistics', 'Turnkey on-site fuel depot: 30,000L tank, high-flow dispenser, automated fuel management and CCTV. Cut fuel costs significantly for the fleet.', 5, '2025-07-08'),
('Standby Fuel System', 'Private Hospital', 'Eldoret, Kenya', 'Hospitals & Institutions', 'Day tank, bulk tank and automated transfer pump system for 1000kVA standby generator powering critical care wards. Zero downtime since commissioning.', 6, '2025-03-12');
