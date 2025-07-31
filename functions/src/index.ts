import * as functions from "firebase-functions";

const sendpulseId = functions.config().sendpulse.id;
const sendpulseSecret = functions.config().sendpulse.secret;
const mailingListId = functions.config().sendpulse.list_id;
