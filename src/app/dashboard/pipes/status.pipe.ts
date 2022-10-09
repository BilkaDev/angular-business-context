import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "statusPipe" })
export class StatusPipe implements PipeTransform {
  transform(status: string): string {
    if (!status) {
      return "";
    }
    // 📝✔❌📛💪🕠♨🐌☯
    let statusEmoji;
    switch (status) {
      case "In progress":
        statusEmoji = "🕠"

        break;
      case "Assigned":
        statusEmoji = "📝"

        break;
      case "Confirmed":
        statusEmoji = "💪"
        break;
      case "Completed":
          statusEmoji = "✔"
        break;
      case "Low":
        statusEmoji = "🐌"
        break;
      case "Normal":
        statusEmoji = "🔄"
        break;
      case "High":
        statusEmoji = "📛"
        break;
      default:
        statusEmoji = ""
    }

    return statusEmoji
  }
}
