import { Component } from '@angular/core';
import { MaterialService, Material } from '../../services/material.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.scss'
})
export class MaterialFormComponent {

  title = '';
  course_code = '';
  course_name = '';
  description = '';
  professor = '';
  semester = '';
  url = '';

  constructor(private readonly materialService: MaterialService) {}

  submitForm() {
    const newMaterial: Partial<Material> = {
      title: this.title,
      course_code: this.course_code,
      course_name: this.course_name,
      description: this.description,
      professor: this.professor,
      semester: this.semester,
      url: this.url
    };

    this.materialService.create(newMaterial).subscribe({
      next: (res) => {
        console.log('Material créé :', res);
        alert('Material créé avec succès !');

        this.title = '';
        this.course_code = '';
        this.course_name = '';
        this.description = '';
        this.professor = '';
        this.semester = '';
        this.url = '';
      },
      error: (err) => {
        console.error('Erreur création Material :', err);
        alert('Erreur lors de la création du Material');
      }
    });
  }
}