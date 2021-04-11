import { playerMessageToString } from "../utility/Utility";
import { Packet } from "../types/Types";
import { ConnectedClientList } from "./ConnectedClientList";

export const broadcastMessage = (connectedClientList: ConnectedClientList, message: Packet) => {
    connectedClientList.connectedClients.forEach((item) => item.webSocket.send(playerMessageToString(message)));
}

export const broadcastMessageString = (connectedClientList: ConnectedClientList, message: string) => {
    connectedClientList.connectedClients.forEach((item) => item.webSocket.send(message));
}