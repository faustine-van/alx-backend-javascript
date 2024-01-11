namespace Subjects{
    export class Subject{
      public teacher: Teacher | undefined;

      constructor(teacher: Teacher){
        this.teacher = teacher;
      }
      setTeacher(teacher: Teacher): void{
        this.teacher = teacher;
      }
    }
}