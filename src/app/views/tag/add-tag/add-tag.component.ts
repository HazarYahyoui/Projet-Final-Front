import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TagService } from "../ServiceTag/tag.service";

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {
  submitted = false;
  addtagForm?:FormGroup;
  
  constructor(private tagservice: TagService, private router: Router){ }
  ngOnInit(): void {
    this.addtagForm = new FormGroup({
      tagName: new FormControl('',[Validators.required]),
      tagDescription: new FormControl('',[Validators.required]),
    })
  }

  addTag(){
    this.submitted= true;
    if (this.addtagForm?.invalid){
      return;
    }
    console.log(this.addtagForm?.value);
    this.tagservice.createTag(this.addtagForm?.value).subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl('/tag/list-tag');
    },(error)=>{console.log(error);
    })
   
  }
}
