import { NativeDateAdapter } from "@angular/material/core";
import { DateFormatePipe } from "./date-formate.pipe";

export class UtcDateAdapter extends NativeDateAdapter{
    currentTime:Date=new Date();
    override format(date: Date, displayFormat: Object): string{
        let format = new DateFormatePipe();
        let result = format.transform(date);

        return result??'';
    }
}