import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '../ServiceTag/tag.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit{
  submitted = false;
  edittagForm:FormGroup =new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  })
  tagId: any;
  tag: any;
  
  constructor(private tagservice: TagService, private router: Router, private route: ActivatedRoute){ }
  ngOnInit(): void {
    this.tagId= this.route.snapshot.params['id']
    this.tag = this.tagservice.getTag(this.tagId)
    this.edittagForm = new FormGroup({
      tagName: new FormControl('',[Validators.required]),
      tagDescription: new FormControl('',[Validators.required]),
    });

    this.edittagForm.patchValue(this.tag);

  }
 
  editTag(){
    this.submitted = true;
    if(this.edittagForm.invalid){
      return;
    }
    this.tagservice.updateTag(this.edittagForm.value, this.tagId);
    this.router.navigateByUrl('/list-tag');
   
  }
}
