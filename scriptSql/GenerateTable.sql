USE [siasani_notes]
GO
ALTER TABLE [siasani_notes].[not_notes] DROP CONSTRAINT [DF_Table_1_not_fechasis]
GO
/****** Object:  Index [IX_Cobertura_02]    Script Date: 10/31/2022 8:17:31 AM ******/
DROP INDEX [IX_Cobertura_02] ON [siasani_notes].[not_notes]
GO
/****** Object:  Index [IX_Cobertura_01]    Script Date: 10/31/2022 8:17:31 AM ******/
DROP INDEX [IX_Cobertura_01] ON [siasani_notes].[not_notes]
GO
/****** Object:  Table [siasani_notes].[not_notes]    Script Date: 10/31/2022 8:17:31 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[siasani_notes].[not_notes]') AND type in (N'U'))
DROP TABLE [siasani_notes].[not_notes]
GO
/****** Object:  Schema [siasani_notes]    Script Date: 10/31/2022 8:17:31 AM ******/
DROP SCHEMA [siasani_notes]
GO
/****** Object:  User [siasani_notes]    Script Date: 10/31/2022 8:17:31 AM ******/
DROP USER [siasani_notes]
GO
USE [master]
GO
/****** Object:  Database [siasani_notes]    Script Date: 10/31/2022 8:17:31 AM ******/
DROP DATABASE [siasani_notes]
GO
/****** Object:  Database [siasani_notes]    Script Date: 10/31/2022 8:17:31 AM ******/
CREATE DATABASE [siasani_notes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'siasani_notes_data', FILENAME = N'\\ss9\WDB2_S1\MSSQL13.MSSQLSERVER\MSSQL\DATA\siasani_notes_data.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'siasani_notes_log', FILENAME = N'\\ss9\WDB2_S1\MSSQL13.MSSQLSERVER\MSSQL\DATA\siasani_notes_log.ldf' , SIZE = 18312KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [siasani_notes] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [siasani_notes].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [siasani_notes] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [siasani_notes] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [siasani_notes] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [siasani_notes] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [siasani_notes] SET ARITHABORT OFF 
GO
ALTER DATABASE [siasani_notes] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [siasani_notes] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [siasani_notes] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [siasani_notes] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [siasani_notes] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [siasani_notes] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [siasani_notes] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [siasani_notes] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [siasani_notes] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [siasani_notes] SET  ENABLE_BROKER 
GO
ALTER DATABASE [siasani_notes] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [siasani_notes] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [siasani_notes] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [siasani_notes] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [siasani_notes] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [siasani_notes] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [siasani_notes] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [siasani_notes] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [siasani_notes] SET  MULTI_USER 
GO
ALTER DATABASE [siasani_notes] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [siasani_notes] SET DB_CHAINING OFF 
GO
ALTER DATABASE [siasani_notes] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [siasani_notes] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [siasani_notes] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'siasani_notes', N'ON'
GO
ALTER DATABASE [siasani_notes] SET QUERY_STORE = OFF
GO
USE [siasani_notes]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [siasani_notes]
GO
/****** Object:  User [siasani_notes]    Script Date: 10/31/2022 8:17:33 AM ******/
CREATE USER [siasani_notes] FOR LOGIN [siasani_notes] WITH DEFAULT_SCHEMA=[siasani_notes]
GO
ALTER ROLE [db_owner] ADD MEMBER [siasani_notes]
GO
/****** Object:  Schema [siasani_notes]    Script Date: 10/31/2022 8:17:33 AM ******/
CREATE SCHEMA [siasani_notes]
GO
/****** Object:  Table [siasani_notes].[not_notes]    Script Date: 10/31/2022 8:17:33 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [siasani_notes].[not_notes](
	[not_id] [bigint] IDENTITY(1,1) NOT NULL,
	[not_title] [nvarchar](250) NOT NULL,
	[not_body] [nvarchar](2500) NULL,
	[not_fechaadd] [datetime] NOT NULL,
	[not_fechamod] [datetime] NULL,
 CONSTRAINT [PK_not_notes] PRIMARY KEY CLUSTERED 
(
	[not_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Cobertura_01]    Script Date: 10/31/2022 8:17:34 AM ******/
CREATE NONCLUSTERED INDEX [IX_Cobertura_01] ON [siasani_notes].[not_notes]
(
	[not_title] ASC,
	[not_body] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Cobertura_02]    Script Date: 10/31/2022 8:17:34 AM ******/
CREATE NONCLUSTERED INDEX [IX_Cobertura_02] ON [siasani_notes].[not_notes]
(
	[not_body] ASC,
	[not_title] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [siasani_notes].[not_notes] ADD  CONSTRAINT [DF_Table_1_not_fechasis]  DEFAULT (getdate()) FOR [not_fechaadd]
GO
USE [master]
GO
ALTER DATABASE [siasani_notes] SET  READ_WRITE 
GO
