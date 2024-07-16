"use client";

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Send,
  Search,
  Paperclip,
  Smile,
  Mic,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { ScrollArea } from "../../../../components/ui/scroll-area";

const theme = createTheme({
  palette: {
    primary: { main: "#7C3AED" },
    secondary: { main: "#10B981" },
    background: { default: "#F3F4F6" },
  },
});

const ChatList = ({ chats, onSelectChat }) => (
  <List sx={{ width: "100%", bgcolor: "background.paper" }}>
    {chats.map((chat) => (
      <ListItem
        key={chat.id}
        alignItems="flex-start"
        onClick={() => onSelectChat(chat)}
        sx={{
          cursor: "pointer",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
        }}
      >
        <ListItemAvatar>
          <Badge color="secondary" variant="dot" invisible={!chat.online}>
            <Avatar alt={chat.name} src={chat.avatar} />
          </Badge>
        </ListItemAvatar>
        <ListItemText
          primary={chat.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{
                  display: "inline",
                  color: chat.unread ? "primary.main" : "text.secondary",
                }}
                component="span"
                variant="body2"
              >
                {chat.lastMessage}
              </Typography>
            </React.Fragment>
          }
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="caption"
            color={chat.unread ? "primary.main" : "text.secondary"}
          >
            {chat.time}
          </Typography>
          {chat.unread && (
            <Badge
              badgeContent={chat.unreadCount}
              color="primary"
              sx={{ mt: 1 }}
            />
          )}
        </Box>
      </ListItem>
    ))}
  </List>
);

const MessageList = ({ messages }) => (
  <ScrollArea className="h-[calc(100vh-200px)] w-full p-4">
    {messages.map((message) => (
      <Box
        key={message.id}
        sx={{
          display: "flex",
          justifyContent: message.sender === "me" ? "flex-end" : "flex-start",
          mb: 2,
        }}
      >
        {message.sender !== "me" && (
          <Avatar
            sx={{ mr: 1 }}
            alt={message.sender}
            src={`https://source.unsplash.com/50x50/?face&${message.id}`}
          />
        )}
        <Box
          sx={{
            maxWidth: "70%",
            bgcolor: message.sender === "me" ? "primary.main" : "grey.200",
            color: message.sender === "me" ? "white" : "black",
            borderRadius: 2,
            p: 1,
            position: "relative",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{
              mt: 0.5,
              color:
                message.sender === "me"
                  ? "rgba(255,255,255,0.7)"
                  : "text.secondary",
            }}
          >
            {message.time}
          </Typography>
        </Box>
      </Box>
    ))}
  </ScrollArea>
);

const Inbox = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  const groupChats = [
    {
      id: 1,
      name: "Study Group A",
      avatar: "https://source.unsplash.com/100x100/?group",
      lastMessage: "Project meeting at 3 PM",
      time: "10:30 AM",
      isGroup: true,
      online: true,
      unread: true,
      unreadCount: 3,
    },
    {
      id: 2,
      name: "Dorm Chat",
      avatar: "https://source.unsplash.com/100x100/?dorm",
      lastMessage: "Movie night at 8!",
      time: "Yesterday",
      isGroup: true,
      online: false,
      unread: false,
    },
    {
      id: 3,
      name: "CS101 Class",
      avatar: "https://source.unsplash.com/100x100/?computer",
      lastMessage: "Don't forget the quiz tomorrow!",
      time: "2 days ago",
      isGroup: true,
      online: true,
      unread: true,
      unreadCount: 1,
    },
  ];

  const individualChats = [
    {
      id: 4,
      name: "Sarah",
      avatar: "https://source.unsplash.com/100x100/?woman",
      lastMessage: "Did you finish the assignment?",
      time: "9:45 AM",
      isGroup: false,
      online: true,
      unread: false,
    },
    {
      id: 5,
      name: "Prof. Johnson",
      avatar: "https://source.unsplash.com/100x100/?professor",
      lastMessage: "Office hours changed to 2-4 PM",
      time: "Yesterday",
      isGroup: false,
      online: false,
      unread: true,
      unreadCount: 2,
    },
    {
      id: 6,
      name: "Mike",
      avatar: "https://source.unsplash.com/100x100/?man",
      lastMessage: "Wanna grab lunch?",
      time: "3 days ago",
      isGroup: false,
      online: true,
      unread: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "John",
      text: "Hey, did you take notes in Bio class?",
      time: "11:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Yeah, I'll send them to you after lunch",
      time: "11:32 AM",
    },
    {
      id: 3,
      sender: "John",
      text: "Thanks! You're a lifesaver",
      time: "11:33 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "No problem! Did you understand the part about cellular respiration?",
      time: "11:35 AM",
    },
    {
      id: 5,
      sender: "John",
      text: "Not really, could you explain it when we meet for study group?",
      time: "11:36 AM",
    },
    {
      id: 6,
      sender: "me",
      text: "Sure, I'll bring my diagrams too. See you then!",
      time: "11:38 AM",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: "flex", height: "90vh", bgcolor: "background.default" }}
      >
        <Box sx={{ width: 360, borderRight: 1, borderColor: "divider" }}>
          <Box sx={{ p: 2 }}>
            <Input
              placeholder="Search chats..."
              startAdornment={<Search size={18} />}
              fullWidth
            />
          </Box>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            centered
          >
            <Tab label="Individual" />
            <Tab label="Group" />
          </Tabs>
          <Divider />
          <ChatList
            chats={tabValue === 0 ? individualChats : groupChats}
            onSelectChat={setSelectedChat}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          {selectedChat ? (
            <>
              <Box
                sx={{
                  p: 2,
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={selectedChat.avatar} sx={{ mr: 2 }} />
                  <Typography variant="h6">{selectedChat.name}</Typography>
                </Box>
                <Box>
                  <IconButton>
                    <Phone size={20} />
                  </IconButton>
                  <IconButton>
                    <Video size={20} />
                  </IconButton>
                  <IconButton>
                    <MoreVertical size={20} />
                  </IconButton>
                </Box>
              </Box>
              <MessageList messages={messages} />
              <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type a message"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <Paperclip size={20} />
                        </IconButton>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <Smile size={20} />
                        </IconButton>
                        <IconButton>
                          <Mic size={20} />
                        </IconButton>
                        <IconButton color="primary">
                          <Send size={20} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Select a chat to start messaging
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Inbox;
