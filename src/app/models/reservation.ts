import { Client } from "./client";
import { Trajet } from "./trajet";

export interface Reservation {
  id: number;
  rdv: Date;
  facturations: number[];
  client: Client;
  trajet: Trajet;
}
