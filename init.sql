--- CREATE ALUNO --- 

CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);

SELECT * FROM Aluno 

--- CRIANDO RA ---

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();



--- CREATE LIVRO ---
DROP TABLE Livro

CREATE TABLE Livro (
    id_livro INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);

SELECT * FROM Livro 

--- INSERTS ALUNO --

INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020'),
('Luke', 'Andrade', '2002-05-23', 'Rua das Sementes, 203', 'luke@gmail.com', '16991447893'),
('Livia', 'Gabriela', '2008-07-25', 'Rua Jardim das Flores, 366', 'livia.gabriela@gmail.com', '16995998890'),
('Beatriz', 'Costa', '2003-09-12', 'Rua Zumbie dos Palmares, 749', 'beatrizcosta@gmail.com', '16991978760'),
('Anthony', 'Stark', '2007-12-05', 'Rua New York, 387', 'tony.stark@gmail.com', '16993950764'),
('Lara', 'Almada', '2006-07-17', 'Rua Travessa Barão do Rio Branco, 292', 'lara_almada@gmail.com', '16993234039'),
('Tereza', 'Baptista', '2000-03-11', 'Rua Cidade Nova, 2025', 'baptista@gmail.com', '16992941978'),
('Pedro', 'Cavalcanti', '2002-10-13', 'Rua Emanuel Rodrigues, 856', 'pedrocalvanti@gmail.com.', '16991591572'),
('Helena', 'Assis', '2006-02-23', 'Rua Forte João, 2023', 'helena.assis@gmail.com', '16980924523'),
('Gabriel', 'Soares', '2005-01-27', 'Rua Del Rey, 202', 'gabriel@gamil.com', '16983912319'),
('Louise', 'Cardoso', '2009-03-01', 'Rua Valéria Zanguini, 2009', 'cardoso@gmail.com', '16995942032');

SELECT * FROM Aluno;
--- LIVRO ---

INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível'),
('Harry Potter e a Pedra Filosofal', 'J.K.Rowling', 'Editora Rocco', '1997', '978-8532511010', 15, 9, 80.00, 'Disponível'),
('Dom Casmurro', 'Machado de Assis', 'Companhia das Letras', '1889', '978-8535932226', 5, 2, 70.00, 'Disponível'),
('A Menina que Roubava Livros', 'Markus Zusak', 'Intrínseca', '2007', '978-8598078171', 8, 6, 100.00, 'Disponível'),
('Cem Anos de Solidão', 'Gabriel García Márquez', 'Record', '1967', '9788501030479', 14, 12, 30.00, 'Disponível'),
('It: A Coisa', 'Stephen King', 'Suma', '1986', '978-8560280940', 5, 2, 70.00, 'Disponível'),
('A Culpa é das Estrelas', 'John Green', 'Intrínseca', '2012', '978-85805722664', 11, 9, 160.00, 'Disponível'),
('Jogos Vorazes', 'Suzanne Collins', 'Rocco', '2008', '9788579800245', 7, 5, 120.00, 'Disponível'),
('A Seleção', 'Kiera Cass', 'Seguinte', '2012', '9788565765015', 7, 2, 90.00, 'Disponível'),
('A Menina do Vale', 'Bel Pesce', 'Enkla', '2012', '978-8566654004', 4, 3, 100.00, 'Disponível'),
('O Código Da Vinci', 'Dan Brown', 'Arqueiro', '2003', '9788599296574', 3, 2, 150.00, 'Disponível');

SELECT * FROM Livro;

--- CREATE EMPRESTIMO ---
DROP TABLE Empestimo
CREATE TABLE Emprestimo (
    id_emprestimo INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);

SELECT * FROM Emprestimo;

--- INSERT EMPRESTIMO ---

INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento'),
(11, 12, '2024-12-03', '2025-01-03', 'Em andamento'),
(12, 11, '2024-09-04', '2024-10-04', 'Em andamento'),
(13, 15, '2024-03-05', '2024-04-05', 'Em andamento'),
(15, 13, '2024-11-10', '2024-12-10', 'Em andamento'),
(14, 20, '2024-07-05', '2024-07-10', 'Em andamento'),
(16, 14, '2024-09-06', '2024-10-20', 'Em andamento'),
(17, 18, '2024-12-07', '2025-01-21', 'Em andamento'),
(18, 17, '2024-12-08', '2024-12-22', 'Em andamento'),
(20, 19, '2025-03-09', '2025-04-09', 'Em andamento'),
(19, 10, '2025-01-10', '2024-02-10', 'Em andamento');

SELECT *FROM Emprestimo; 

SELECT 
    a.ra, 
    a.nome, 
    a.sobrenome, 
    a.celular, 
    l.titulo, 
    l.autor, 
    l.editora, 
    e.data_emprestimo, 
    e.data_devolucao, 
    e.status_emprestimo
FROM 
    Emprestimo e
JOIN 
    Aluno a ON e.id_aluno = a.id_aluno
JOIN 
    Livro l ON e.id_livro = l.id_livro;
