// data.ts (dans le même dossier)
export interface RunInfo {
  run_id: number;
  n: number;
  threshold: number;
  seed: number | null;
  run_timestamp: string;
}

export interface EquipmentInfo {
  equipment_id: number;
  name: string;
  model: string;
  location: string;
  installed_date: string;
}

export interface Entry {
  id: number;
  run_id: number;
  equipment_id: number;
  timestamp: string;
  temperature_c: string;
  vibration_mm_s: number;
  pressure_bar: number;
  current_a: string;
  runtime_hours: number;
  error_code: number;
  maintenance_due: boolean;
  ambient_humidity: number;
  total_units: number;
  units_sold: number;
  units_remaining: number;
  incident_loss: boolean;
  management_reported: boolean;
  temp_zscore: number;
  vib_zscore: number;
  anomaly_score: number;
  run: RunInfo;
  equipment: EquipmentInfo;
}

export const calendarData: { data: Entry[] } = {
  data: [
    // 11 juin 2025
    {
      id: 1,
      run_id: 3,
      equipment_id: 1,
      timestamp: "2025-06-11T08:00:00.000000Z",
      temperature_c: "74.89",
      vibration_mm_s: 0.848,
      pressure_bar: 2.065,
      current_a: "9.44",
      runtime_hours: 122,
      error_code: 0,
      maintenance_due: false,
      ambient_humidity: 51,
      total_units: 120,
      units_sold: 65,
      units_remaining: 55,
      incident_loss: true,
      management_reported: false,
      temp_zscore: 0,
      vib_zscore: 0.393,
      anomaly_score: 0.393,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 1,
        name: "Pompe hydraulique A1",
        model: "HX-2000",
        location: "Salle 1",
        installed_date: "2023-01-15",
      },
    },
    {
      id: 2,
      run_id: 3,
      equipment_id: 2,
      timestamp: "2025-06-11T12:30:00.000000Z",
      temperature_c: "68.12",
      vibration_mm_s: 0.702,
      pressure_bar: 1.987,
      current_a: "8.90",
      runtime_hours: 310,
      error_code: 0,
      maintenance_due: false,
      ambient_humidity: 47,
      total_units: 200,
      units_sold: 150,
      units_remaining: 50,
      incident_loss: false,
      management_reported: false,
      temp_zscore: -0.842,
      vib_zscore: -0.105,
      anomaly_score: 0.842,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 2,
        name: "Compresseur C2",
        model: "CP-500",
        location: "Atelier B",
        installed_date: "2022-11-05",
      },
    },
    {
      id: 3,
      run_id: 3,
      equipment_id: 3,
      timestamp: "2025-06-11T17:45:00.000000Z",
      temperature_c: "81.35",
      vibration_mm_s: 1.12,
      pressure_bar: 2.15,
      current_a: "10.15",
      runtime_hours: 75,
      error_code: 2,
      maintenance_due: true,
      ambient_humidity: 60,
      total_units: 90,
      units_sold: 40,
      units_remaining: 50,
      incident_loss: true,
      management_reported: true,
      temp_zscore: 1.524,
      vib_zscore: 0.845,
      anomaly_score: 1.524,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 3,
        name: "Moteur électrique M3",
        model: "EM-750",
        location: "Hangar C",
        installed_date: "2021-07-20",
      },
    },

    // 12 juin 2025
    {
      id: 4,
      run_id: 3,
      equipment_id: 1,
      timestamp: "2025-06-12T07:15:00.000000Z",
      temperature_c: "66.63",
      vibration_mm_s: 0.973,
      pressure_bar: 2.002,
      current_a: "9.28",
      runtime_hours: 536,
      error_code: 0,
      maintenance_due: false,
      ambient_humidity: 58.3,
      total_units: 151,
      units_sold: 141,
      units_remaining: 10,
      incident_loss: false,
      management_reported: true,
      temp_zscore: -1.505,
      vib_zscore: 0.613,
      anomaly_score: 1.505,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 1,
        name: "Pompe hydraulique A1",
        model: "HX-2000",
        location: "Salle 1",
        installed_date: "2023-01-15",
      },
    },
    {
      id: 5,
      run_id: 3,
      equipment_id: 2,
      timestamp: "2025-06-12T13:00:00.000000Z",
      temperature_c: "72.00",
      vibration_mm_s: 0.65,
      pressure_bar: 1.98,
      current_a: "8.75",
      runtime_hours: 400,
      error_code: 0,
      maintenance_due: false,
      ambient_humidity: 52,
      total_units: 180,
      units_sold: 170,
      units_remaining: 10,
      incident_loss: false,
      management_reported: false,
      temp_zscore: -0.21,
      vib_zscore: -0.21,
      anomaly_score: 0.21,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 2,
        name: "Compresseur C2",
        model: "CP-500",
        location: "Atelier B",
        installed_date: "2022-11-05",
      },
    },
    {
      id: 6,
      run_id: 3,
      equipment_id: 3,
      timestamp: "2025-06-12T19:30:00.000000Z",
      temperature_c: "69.50",
      vibration_mm_s: 0.58,
      pressure_bar: 2.1,
      current_a: "9.00",
      runtime_hours: 210,
      error_code: 1,
      maintenance_due: true,
      ambient_humidity: 55,
      total_units: 140,
      units_sold: 100,
      units_remaining: 40,
      incident_loss: false,
      management_reported: true,
      temp_zscore: -0.65,
      vib_zscore: -0.35,
      anomaly_score: 0.65,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 3,
        name: "Moteur électrique M3",
        model: "EM-750",
        location: "Hangar C",
        installed_date: "2021-07-20",
      },
    },

    // 13 juin 2025
    {
      id: 7,
      run_id: 3,
      equipment_id: 1,
      timestamp: "2025-06-13T06:00:00.000000Z",
      temperature_c: "70.12",
      vibration_mm_s: 0.912,
      pressure_bar: 2.03,
      current_a: "9.60",
      runtime_hours: 250,
      error_code: 1,
      maintenance_due: true,
      ambient_humidity: 54,
      total_units: 130,
      units_sold: 80,
      units_remaining: 50,
      incident_loss: false,
      management_reported: true,
      temp_zscore: -0.123,
      vib_zscore: 0.512,
      anomaly_score: 0.512,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 1,
        name: "Pompe hydraulique A1",
        model: "HX-2000",
        location: "Salle 1",
        installed_date: "2023-01-15",
      },
    },
    {
      id: 8,
      run_id: 3,
      equipment_id: 2,
      timestamp: "2025-06-13T14:20:00.000000Z",
      temperature_c: "65.80",
      vibration_mm_s: 0.74,
      pressure_bar: 1.99,
      current_a: "8.50",
      runtime_hours: 360,
      error_code: 0,
      maintenance_due: false,
      ambient_humidity: 49,
      total_units: 170,
      units_sold: 160,
      units_remaining: 10,
      incident_loss: false,
      management_reported: false,
      temp_zscore: -1.0,
      vib_zscore: -0.2,
      anomaly_score: 1.0,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 2,
        name: "Compresseur C2",
        model: "CP-500",
        location: "Atelier B",
        installed_date: "2022-11-05",
      },
    },
    {
      id: 9,
      run_id: 3,
      equipment_id: 3,
      timestamp: "2025-06-13T20:45:00.000000Z",
      temperature_c: "78.25",
      vibration_mm_s: 1.005,
      pressure_bar: 2.12,
      current_a: "10.00",
      runtime_hours: 95,
      error_code: 2,
      maintenance_due: true,
      ambient_humidity: 62,
      total_units: 100,
      units_sold: 50,
      units_remaining: 50,
      incident_loss: true,
      management_reported: true,
      temp_zscore: 1.234,
      vib_zscore: 0.9,
      anomaly_score: 1.234,
      run: {
        run_id: 3,
        n: 200,
        threshold: 2.5,
        seed: null,
        run_timestamp: "2025-06-12T03:27:13.323274Z",
      },
      equipment: {
        equipment_id: 3,
        name: "Moteur électrique M3",
        model: "EM-750",
        location: "Hangar C",
        installed_date: "2021-07-20",
      },
    },
  ],
};
