import { Component ,OnInit} from '@angular/core';
import { Teacher } from 'src/Models/Teacher';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-delete-teacher',
  templateUrl: './delete-teacher.component.html',
  styleUrls: ['./delete-teacher.component.css']
})
export class DeleteTeacherComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    
  }
}
