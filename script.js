class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    getNome() {
      return this.nome;
    }
  
    getIdade() {
      return this.idade;
    }
  }
  
  class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
      super(nome, idade);
      this.matricula = matricula;
    }
  
    getMatricula() {
      return this.matricula;
    }
  }
  
  class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
      super(nome, idade);
      this.disciplina = disciplina;
    }
  
    getDisciplina() {
      return this.disciplina;
    }
  }
  
  class Disciplina {
    constructor(nome, professor) {
      this.nome = nome;
      this.professor = professor;
      this.alunos = [];
    }
  
    getNome() {
      return this.nome;
    }
  
    getProfessor() {
      return this.professor;
    }
  
    getAlunos() {
      return this.alunos;
    }
  
    adicionarAluno(aluno) {
      this.alunos.push(aluno);
    }
  }
  
  // Criando um professor
  const professor = new Professor("Wagner", 35, "pw");
  const professor2 = new Professor("Ediney", 40, "bd");
  const professor3 = new Professor("Rogerio", 30, "ptcc");
  
  // Criando alunos
  const aluno1 = new Aluno("Ze da manga", 16, "2021001");
  const aluno2 = new Aluno("Pinhata", 15, "2021002");
  const aluno3 = new Aluno("Chaparral", 17, "2021003");
  const aluno4 = new Aluno("Coolerzinho", 16, "2021004");
  const aluno5 = new Aluno("Storm", 15, "2021005");
  
  // Criando disciplinas e adicionando professor e alunos
  const disciplina1 = new Disciplina("pw", professor);
  disciplina1.adicionarAluno(aluno1);
  disciplina1.adicionarAluno(aluno2);
  disciplina1.adicionarAluno(aluno3);
  disciplina1.adicionarAluno(aluno4);
  disciplina1.adicionarAluno(aluno5);
  
  const disciplina2 = new Disciplina("bd", professor2);
  disciplina2.adicionarAluno(aluno1);
  disciplina2.adicionarAluno(aluno2);
  disciplina2.adicionarAluno(aluno3);
  disciplina2.adicionarAluno(aluno4);
  disciplina2.adicionarAluno(aluno5);
  
  const disciplina3 = new Disciplina("ptcc", professor3);
  disciplina3.adicionarAluno(aluno1);
  disciplina3.adicionarAluno(aluno2);
  disciplina3.adicionarAluno(aluno3);
  disciplina3.adicionarAluno(aluno4);
  disciplina3.adicionarAluno(aluno5);
  
  // Exibindo informações das disciplinas
  console.log("Disciplina: " + disciplina1.getNome());
  console.log("Professor: " + disciplina1.getProfessor().getNome());
  console.log("Alunos: ");
  disciplina1.getAlunos().forEach(aluno => {
    console.log("- " + aluno.getNome());
  });
  console.log();
  
  console.log("Disciplina: " + disciplina2.getNome());
  console.log("Professor: " + disciplina2.getProfessor().getNome());
  console.log("Alunos: ");
  disciplina2.getAlunos().forEach(aluno => {
    console.log("- " + aluno.getNome());
  });
  console.log();
  
  console.log("Disciplina: " + disciplina3.getNome());
  console.log("Professor: " + disciplina3.getProfessor().getNome());
  console.log("Alunos: ");
  disciplina3.getAlunos().forEach(aluno => {
    console.log("- " + aluno.getNome());
  });
  console.log();
  