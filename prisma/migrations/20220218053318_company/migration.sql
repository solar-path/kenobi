-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "legalentity" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "address" TEXT,
    "headquarterID" INTEGER,
    "bin" TEXT,
    CONSTRAINT "Company_headquarterID_fkey" FOREIGN KEY ("headquarterID") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_legalentity_key" ON "Company"("legalentity");

-- CreateIndex
CREATE UNIQUE INDEX "Company_code_key" ON "Company"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Company_bin_key" ON "Company"("bin");
