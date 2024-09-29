import { Injectable } from '@nestjs/common'
import {format} from 'date-fns'

@Injectable()
export class DateTimeService{
    getCurrentDateTime(): string{
        return format(new Date() , 'dd-MM-yyyy HH:mm:ss')
    }
}