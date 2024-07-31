import { OnInit ,Component} from "@angular/core";
import { ChatService } from "./chatService/chat.service";
import { UserService } from "./userService/user.service";
@Component({
    selector:'app-chat',
    templateUrl:'./chat.component.html',
    styleUrls:['./chat.component.scss']
})

export class ChatComponent implements OnInit{
    messages: string[] = [];
    currentUser: string | null = null;
    receiverId: string = ''; // Add receiverId property
  
    constructor(private chatService: ChatService, private userService: UserService) {}
  
    ngOnInit(): void {
      this.userService.currentUser$.subscribe(userId => {
        this.currentUser = userId;
        if (this.currentUser && this.receiverId) {
          this.messages = this.chatService.getMessages(this.currentUser, this.receiverId);
        }
      });
    }
  
    loadMessages() {
        if (this.currentUser && this.receiverId) {
          this.messages = this.chatService.getMessages(this.currentUser, this.receiverId);
        }
      }
    
      sendMessage(message: string) {
        if (this.currentUser && this.receiverId && message.trim()) {
          this.chatService.addMessage(this.currentUser, this.receiverId, message);
          this.loadMessages();  // Reload messages after sending a new one
        }
      }
  
    clearChat() {
      if (this.currentUser && this.receiverId) {
        this.chatService.clearMessages(this.currentUser, this.receiverId);
        this.messages = [];
      }
    }
  }