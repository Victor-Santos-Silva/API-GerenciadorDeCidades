CREATE DATABASE dbGerenciadorCidades;

USE dbGerenciadorCidades;

INSERT INTO estados (nome, uf, createdAt, updatedAt)
VALUES
('Acre', 'AC', NOW(), NOW()),
('Alagoas', 'AL', NOW(), NOW()),
('Amapá', 'AP', NOW(), NOW()),
('Amazonas', 'AM', NOW(), NOW()),
('Bahia', 'BA', NOW(), NOW()),
('Ceará', 'CE', NOW(), NOW()),
('Distrito Federal', 'DF', NOW(), NOW()),
('Espírito Santo', 'ES', NOW(), NOW()),
('Goiás', 'GO', NOW(), NOW()),
('Maranhão', 'MA', NOW(), NOW()),
('Mato Grosso', 'MT', NOW(), NOW()),
('Mato Grosso do Sul', 'MS', NOW(), NOW()),
('Minas Gerais', 'MG', NOW(), NOW()),
('Pará', 'PA', NOW(), NOW()),
('Paraíba', 'PB', NOW(), NOW()),
('Paraná', 'PR', NOW(), NOW()),
('Pernambuco', 'PE', NOW(), NOW()),
('Piauí', 'PI', NOW(), NOW()),
('Rio de Janeiro', 'RJ', NOW(), NOW()),
('Rio Grande do Norte', 'RN', NOW(), NOW()),
('Rio Grande do Sul', 'RS', NOW(), NOW()),
('Rondônia', 'RO', NOW(), NOW()),
('Roraima', 'RR', NOW(), NOW()),
('Santa Catarina', 'SC', NOW(), NOW()),
('São Paulo', 'SP', NOW(), NOW()),
('Sergipe', 'SE', NOW(), NOW()),
('Tocantins', 'TO', NOW(), NOW());



SELECT * FROM cidades;

-- DROP TABLE cidades;

-- DROP DATABASE dbGerenciadorCidades;

