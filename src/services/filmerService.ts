// export const filmerGet = async () => {
//     const filmerRes = await fetch("http://omdbapi.com?apikey=3cf50f5c&s=spider");
//     const filmerData: ApiRes = await filmerRes.json();
//     skapaHtml(filmerData.Search);
// }

import { skapaHtml } from "../htmlUtils";
import type { ApiRes } from "../models/ApiRes";
import { basGet } from "./basService"

export const filmerGet = async () => {
    const filmerRes = await basGet<ApiRes>("http://omdbapi.com?apikey=3cf50f5c&s=thor");
    skapaHtml(filmerRes.Search);
}