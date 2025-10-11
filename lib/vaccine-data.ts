// Vaccine data organized by age in months
type Vaccine = {
  name: string
  description: string
  notes?: string
}

type VaccineSchedule = {
  [key: number]: Vaccine[]
}

// Simplified vaccine schedule based on CDC recommendations
const vaccineSchedule: VaccineSchedule = {
  0: [
    {
      name: "Hepatitis B (HepB)",
      description: "First dose of the Hepatitis B vaccine, typically given at birth.",
      notes: "Protects against the hepatitis B virus, which can cause liver disease.",
    },
  ],
  1: [
    {
      name: "Hepatitis B (HepB)",
      description: "Second dose of the Hepatitis B vaccine for some brands.",
      notes: "Only given at 1 month if the first dose was given at birth and using a specific vaccine brand.",
    },
  ],
  2: [
    {
      name: "Hepatitis B (HepB)",
      description: "Second dose of the Hepatitis B vaccine.",
      notes: "Typically given between 1-2 months of age.",
    },
    {
      name: "Rotavirus (RV)",
      description: "First dose of the Rotavirus vaccine.",
      notes: "Protects against rotavirus, which causes severe diarrhea and vomiting.",
    },
    {
      name: "Diphtheria, Tetanus, & acellular Pertussis (DTaP)",
      description: "First dose of the DTaP vaccine.",
      notes: "Protects against diphtheria, tetanus, and pertussis (whooping cough).",
    },
    {
      name: "Haemophilus influenzae type b (Hib)",
      description: "First dose of the Hib vaccine.",
      notes: "Protects against Haemophilus influenzae type b, which can cause meningitis and other serious infections.",
    },
    {
      name: "Pneumococcal conjugate (PCV13)",
      description: "First dose of the PCV13 vaccine.",
      notes: "Protects against pneumococcal bacteria, which can cause pneumonia, meningitis, and ear infections.",
    },
    {
      name: "Inactivated Poliovirus (IPV)",
      description: "First dose of the IPV vaccine.",
      notes: "Protects against polio, which can cause paralysis.",
    },
  ],
  4: [
    {
      name: "Rotavirus (RV)",
      description: "Second dose of the Rotavirus vaccine.",
      notes: "Continues protection against rotavirus.",
    },
    {
      name: "Diphtheria, Tetanus, & acellular Pertussis (DTaP)",
      description: "Second dose of the DTaP vaccine.",
      notes: "Continues protection against diphtheria, tetanus, and pertussis.",
    },
    {
      name: "Haemophilus influenzae type b (Hib)",
      description: "Second dose of the Hib vaccine.",
      notes: "Continues protection against Haemophilus influenzae type b.",
    },
    {
      name: "Pneumococcal conjugate (PCV13)",
      description: "Second dose of the PCV13 vaccine.",
      notes: "Continues protection against pneumococcal bacteria.",
    },
    {
      name: "Inactivated Poliovirus (IPV)",
      description: "Second dose of the IPV vaccine.",
      notes: "Continues protection against polio.",
    },
  ],
  6: [
    {
      name: "Rotavirus (RV)",
      description: "Third dose of the Rotavirus vaccine (if required by brand).",
      notes: "Some rotavirus vaccine brands require a third dose.",
    },
    {
      name: "Diphtheria, Tetanus, & acellular Pertussis (DTaP)",
      description: "Third dose of the DTaP vaccine.",
      notes: "Continues protection against diphtheria, tetanus, and pertussis.",
    },
    {
      name: "Haemophilus influenzae type b (Hib)",
      description: "Third dose of the Hib vaccine.",
      notes: "Continues protection against Haemophilus influenzae type b.",
    },
    {
      name: "Pneumococcal conjugate (PCV13)",
      description: "Third dose of the PCV13 vaccine.",
      notes: "Continues protection against pneumococcal bacteria.",
    },
    {
      name: "Inactivated Poliovirus (IPV)",
      description: "Third dose of the IPV vaccine.",
      notes: "Continues protection against polio.",
    },
    {
      name: "Influenza (Flu)",
      description: "Annual flu vaccine (during flu season).",
      notes:
        "Protects against seasonal influenza. Children receiving flu vaccine for the first time need two doses separated by at least 4 weeks.",
    },
    {
      name: "Hepatitis B (HepB)",
      description: "Third dose of the Hepatitis B vaccine.",
      notes: "Completes the hepatitis B vaccine series.",
    },
  ],
  12: [
    {
      name: "Measles, Mumps, Rubella (MMR)",
      description: "First dose of the MMR vaccine.",
      notes: "Protects against measles, mumps, and rubella.",
    },
    {
      name: "Varicella (VAR)",
      description: "First dose of the Varicella vaccine.",
      notes: "Protects against chickenpox.",
    },
    {
      name: "Hepatitis A (HepA)",
      description: "First dose of the Hepatitis A vaccine.",
      notes: "Protects against hepatitis A virus, which can cause liver disease.",
    },
    {
      name: "Haemophilus influenzae type b (Hib)",
      description: "Fourth dose of the Hib vaccine.",
      notes: "Completes the Hib vaccine series.",
    },
    {
      name: "Pneumococcal conjugate (PCV13)",
      description: "Fourth dose of the PCV13 vaccine.",
      notes: "Completes the PCV13 vaccine series.",
    },
    {
      name: "Influenza (Flu)",
      description: "Annual flu vaccine (during flu season).",
      notes: "Protects against seasonal influenza.",
    },
  ],
  15: [
    {
      name: "Diphtheria, Tetanus, & acellular Pertussis (DTaP)",
      description: "Fourth dose of the DTaP vaccine.",
      notes: "Continues protection against diphtheria, tetanus, and pertussis.",
    },
    {
      name: "Influenza (Flu)",
      description: "Annual flu vaccine (during flu season).",
      notes: "Protects against seasonal influenza.",
    },
  ],
  18: [
    {
      name: "Hepatitis A (HepA)",
      description: "Second dose of the Hepatitis A vaccine.",
      notes: "Completes the hepatitis A vaccine series.",
    },
    {
      name: "Influenza (Flu)",
      description: "Annual flu vaccine (during flu season).",
      notes: "Protects against seasonal influenza.",
    },
  ],
  24: [
    {
      name: "Influenza (Flu)",
      description: "Annual flu vaccine (during flu season).",
      notes: "Protects against seasonal influenza.",
    },
  ],
  48: [
    {
      name: "Diphtheria, Tetanus, & acellular Pertussis (DTaP)",
      description: "Fifth dose of the DTaP vaccine.",
      notes: "Completes the DTaP vaccine series for children.",
    },
    {
      name: "Inactivated Poliovirus (IPV)",
      description: "Fourth dose of the IPV vaccine.",
      notes: "Completes the IPV vaccine series.",
    },
    {
      name: "Measles, Mumps, Rubella (MMR)",
      description: "Second dose of the MMR vaccine.",
      notes: "Completes the MMR vaccine series.",
    },
    {
      name: "Varicella (VAR)",
      description: "Second dose of the Varicella vaccine.",
      notes: "Completes the Varicella vaccine series.",
    },
    {
      name: "Influenza (Flu)",
      description: "Annual flu vaccine (during flu season).",
      notes: "Protects against seasonal influenza.",
    },
  ],
  132: [
    {
      name: "Tetanus, Diphtheria, & acellular Pertussis (Tdap)",
      description: "Booster dose of Tdap.",
      notes: "Booster for continued protection against tetanus, diphtheria, and pertussis.",
    },
    {
      name: "Human Papillomavirus (HPV)",
      description: "HPV vaccine series (2 or 3 doses depending on age at initial vaccination).",
      notes: "Protects against HPV, which can cause certain cancers and genital warts.",
    },
    {
      name: "Meningococcal (MenACWY)",
      description: "First dose of the MenACWY vaccine.",
      notes: "Protects against meningococcal disease, which can cause meningitis and bloodstream infections.",
    },
    {
      name: "Influenza (Flu)",
      description: "Annual flu vaccine (during flu season).",
      notes: "Protects against seasonal influenza.",
    },
  ],
  192: [
    {
      name: "Meningococcal (MenACWY)",
      description: "Second dose of the MenACWY vaccine.",
      notes: "Booster for continued protection against meningococcal disease.",
    },
    {
      name: "Influenza (Flu)",
      description: "Annual flu vaccine (during flu season).",
      notes: "Protects against seasonal influenza.",
    },
  ],
}

// Function to get vaccine recommendations based on age in months
export function getVaccineRecommendations(ageInMonths: number): Vaccine[] {
  // Find the closest age in the schedule that is less than or equal to the given age
  const ages = Object.keys(vaccineSchedule)
    .map(Number)
    .sort((a, b) => a - b)

  // If the child is younger than the earliest age in our schedule
  if (ageInMonths < ages[0]) {
    return []
  }

  // Find the closest age bracket
  let closestAge = ages[0]
  for (const age of ages) {
    if (age <= ageInMonths) {
      closestAge = age
    } else {
      break
    }
  }

  // Return vaccines for that age
  return vaccineSchedule[closestAge] || []
}
