
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Ristorante`
--

USE `YQHMAeuiyx`;


CREATE TABLE `Tavoli` (
  `cod_tavolo` int(11) NOT NULL,
  `numero_posti` int(10) UNSIGNED NOT NULL,
  `libero` varchar(256) NOT NULL,
  PRIMARY KEY (`cod_tavolo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `Tavoli` (`cod_tavolo`, `numero_posti`, `libero`) VALUES
(1, 5, 'si'),
(2, 5, 'si'),
(3, 5, 'si'),
(4, 5, 'si'),
(5, 5, 'si'),
(6, 5, 'si'),
(7, 5, 'si'),
(8, 5, 'si'),
(9, 5, 'si'),
(10, 5, 'si');



CREATE TABLE `Menu` (
  `cod_portata` int(11) NOT NULL ,
  `nome_portata` varchar(256) NOT NULL,
  `descrizione` varchar(256) NOT NULL,
  `prezzo` int(11) NOT NULL,
  `categoria` varchar(10) NOT NULL,
  PRIMARY KEY (`cod_portata`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `Menu` (`cod_portata`, `nome_portata`, `descrizione`, `prezzo`, `categoria`) VALUES
(1, 'pasta', 'prosciutto e uova',  13, 'primo');


CREATE TABLE `Tavoli_Menu` (
 `cod_ordinazione` int(11) NOT NULL,
  `ref_tavolo` int(11) NOT NULL,
  `ref_portata` int(11) NOT NULL,
  `quantita` int(11) NOT NULL,
  `ordinazione_aperta` varchar(256) NOT NULL,
   PRIMARY KEY (`cod_ordinazione`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `Tavoli_Menu` (`cod_ordinazione`,`ref_tavolo`, `ref_portata`,`quantita`,`ordinazione_aperta`) VALUES
(1,1, 1,2,'si');

-- ALTER TABLE `Menu`
-- ADD PRIMARY KEY (`cod_portata`);


-- ALTER TABLE `Tavoli`
-- ADD PRIMARY KEY (`cod_tavolo`);
ALTER TABLE `Tavoli_Menu` 
ADD constraint `cod_ordinazione1`  FOREIGN KEY (`ref_portata`) REFERENCES `Menu` (`cod_portata`), 
ADD constraint `cod_ordinazione2` FOREIGN KEY (`ref_tavolo`) REFERENCES `Tavoli` (`cod_tavolo`);
