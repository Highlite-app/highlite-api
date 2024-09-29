export class NotificationInterface {
  pushNotification: boolean = true;
  pauseAll: boolean = false;
  emailNotifications: {
    feedback: true;
    reminder: true;
    product: true;
    support: true;
  };
  message: {
    superMessage: true;
    messageRequest: true;
    matchReminder: true;
  };
  following: {
    followerNotification: true;
    followingNotification: true;
    accountSuggestion: true;
  };
}
