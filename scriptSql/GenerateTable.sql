/****** Object:  Table [siasani_notes].[notes]    Script Date: 11/1/2022 7:45:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE dbo.[notes](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](250) NOT NULL,
	[body] [nvarchar](2500) NULL,
	[added] [datetime] NOT NULL,
	[modified] [datetime] NULL,
 CONSTRAINT [PK_not_notes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_coverage_index_01]    Script Date: 11/1/2022 7:45:33 PM ******/
CREATE NONCLUSTERED INDEX [IX_coverage_index_01] ON dbo.[notes]
(
	[title] ASC,
	[body] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_coverage_index_02]    Script Date: 11/1/2022 7:45:33 PM ******/
CREATE NONCLUSTERED INDEX [IX_coverage_index_02] ON dbo.[notes]
(
	[body] ASC,
	[title] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [notes] SET  READ_WRITE 
GO
