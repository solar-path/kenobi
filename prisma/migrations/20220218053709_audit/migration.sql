-- CreateTable
CREATE TABLE "Audit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reportTitle" TEXT,
    "reportID" TEXT,
    "slug" TEXT,
    "observation" TEXT,
    "recommendation" TEXT,
    "dateIdentified" TEXT,
    "LegalEntityID" INTEGER,
    "deadlineToResolve" TEXT,
    "EDMS" TEXT,
    "responsible" TEXT,
    "status" TEXT,
    CONSTRAINT "Audit_LegalEntityID_fkey" FOREIGN KEY ("LegalEntityID") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
