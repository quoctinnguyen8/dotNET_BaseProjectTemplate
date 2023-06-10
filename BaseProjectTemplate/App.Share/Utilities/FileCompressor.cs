using System;
using System.Collections.Generic;
using System.IO.Compression;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Share.Utilities
{
	public static class FileCompressor
	{
		public static void Zip(string source, string target)
		{
			if (File.Exists(source))
			{
				using (ZipArchive archive = ZipFile.Open(target, ZipArchiveMode.Update))
				{
					string entryName = Path.GetFileName(source);
					ZipArchiveEntry existingEntry = archive.GetEntry(entryName);

					if (existingEntry != null)
					{
						existingEntry.Delete(); // Xóa file đã tồn tại trong tập tin zip
					}
					archive.CreateEntryFromFile(source, entryName);
				}
			}
			else if (Directory.Exists(source))
			{
				if (File.Exists(target))
				{
					File.Delete(target);
				}
				ZipFile.CreateFromDirectory(source, target, CompressionLevel.Fastest, true);
			}
			else
			{
				throw new FileNotFoundException("Source file or directory does not exist.");
			}
		}

		public static void Zip(string[] source, string target)
		{
			using (ZipArchive archive = ZipFile.Open(target, ZipArchiveMode.Update))
			{
				foreach (string path in source)
				{
					if (File.Exists(path))
					{
						string entryName = Path.GetFileName(path);
						string parentDir = Path.GetDirectoryName(path);

						// Kiểm tra nếu tệp tin không nằm trong thư mục con
						if (parentDir.Equals(source[0].TrimEnd('\\')))
						{
							ZipArchiveEntry existingEntry = archive.GetEntry(entryName);
							if (existingEntry != null)
							{
								existingEntry.Delete(); // Xóa file đã tồn tại trong tập tin zip
							}
							archive.CreateEntryFromFile(path, entryName);
						}
					}
					else if (Directory.Exists(path))
					{
						string rootFolderName = Path.GetFileName(path);
						CompressDirectory(path, rootFolderName, archive, string.Empty);
					}
				}
			}
		}
		private static void CompressDirectory(string sourceDir, string rootFolderName, ZipArchive archive, string currentFolder)
		{
			string[] files = Directory.GetFiles(sourceDir);
			foreach (string file in files)
			{
				string entryName = currentFolder + rootFolderName + "/" + Path.GetFileName(file);
				ZipArchiveEntry existingEntry = archive.GetEntry(entryName);
				if (existingEntry != null)
				{
					existingEntry.Delete(); // Xóa file đã tồn tại trong tập tin zip
				}
				archive.CreateEntryFromFile(file, entryName);
			}

			string[] subDirectories = Directory.GetDirectories(sourceDir);
			foreach (string subDir in subDirectories)
			{
				string subDirName = Path.GetFileName(subDir);
				string entryName = currentFolder + rootFolderName + "/" + subDirName + "/";

				// Kiểm tra nếu thư mục con không trùng với thư mục cha
				if (subDirName != rootFolderName)
				{
					ZipArchiveEntry existingEntry = archive.GetEntry(entryName);
					if (existingEntry == null)
					{
						archive.CreateEntry(entryName);
					}
					CompressDirectory(subDir, rootFolderName, archive, entryName);
				}
			}
		}

		public static string NormalizePath(string path)
		{
			return Path.GetFullPath(new Uri(path).LocalPath)
					   .TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
					   .ToUpperInvariant();
		}

		public static void Unzip(string source, string targetDir)
		{
			using (var archive = ZipFile.Open(source, ZipArchiveMode.Update))
			{
				archive.ExtractToDirectory(targetDir, true);
			}
		}
	}
}
