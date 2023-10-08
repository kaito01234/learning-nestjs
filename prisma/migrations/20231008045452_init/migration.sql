-- CreateTable
CREATE TABLE `First` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `First_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Second` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `firstId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Second_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Second` ADD CONSTRAINT `Second_firstId_fkey` FOREIGN KEY (`firstId`) REFERENCES `First`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
