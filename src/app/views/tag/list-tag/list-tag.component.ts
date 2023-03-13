import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagService } from '../ServiceTag/tag.service';

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.scss']
})
export class ListTagComponent implements OnInit{
  tags:any;

  constructor(private tagservice: TagService, private router: Router){ }

  ngOnInit(): void {
    
    this.tagservice.getAllTag().subscribe((response)=>{
      this.tags= response
      console.log(this.tags);
      console.log(response);
      
    },(error)=>{console.log(error);
    })

  };

  delete(i:any){
    this.tagservice.deleteTag(i)
    this.ngOnInit
    location.reload();
  }
}
