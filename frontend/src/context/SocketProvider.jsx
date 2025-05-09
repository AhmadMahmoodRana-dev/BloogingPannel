import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

const SOCKET_SERVER_URL = "http://localhost:4000"; 

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io(SOCKET_SERVER_URL);

    setSocket(socketIo);

    socketIo.on("connect", () => {
      console.log("Connected to socket server with id:", socketIo.id);
    });

    socketIo.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    // Example response event listener
    socketIo.on("example_response", (data) => {
      console.log("Received example_response:", data);
    });

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
