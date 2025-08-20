#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Validating data structure...');

try {
  // Read the data file
  const dataPath = path.join(__dirname, '../src/data/data.ts');
  const dataContent = fs.readFileSync(dataPath, 'utf8');
  
  // Basic syntax checks
  const checks = [
    {
      name: 'Data object structure',
      test: () => dataContent.includes('const data: Data = {') && dataContent.includes('};'),
      error: 'Data object is not properly defined'
    },
    {
      name: 'Social media array',
      test: () => dataContent.includes('socialMedia: [') && dataContent.includes('],'),
      error: 'Social media array is not properly defined'
    },
    {
      name: 'Experience array',
      test: () => dataContent.includes('experience: [') && dataContent.includes('],'),
      error: 'Experience array is not properly defined'
    },
    {
      name: 'Projects array',
      test: () => dataContent.includes('projects: [') && dataContent.includes('],'),
      error: 'Projects array is not properly defined'
    },
    {
      name: 'Array syntax validation',
      test: () => {
        // Check for common syntax errors
        const lines = dataContent.split('\n');
        let bracketCount = 0;
        let braceCount = 0;
        
        for (const line of lines) {
          bracketCount += (line.match(/\[/g) || []).length;
          bracketCount -= (line.match(/\]/g) || []).length;
          braceCount += (line.match(/\{/g) || []).length;
          braceCount -= (line.match(/\}/g) || []).length;
        }
        
        return bracketCount === 0 && braceCount === 0;
      },
      error: 'Mismatched brackets or braces detected'
    }
  ];
  
  let hasErrors = false;
  
  for (const check of checks) {
    try {
      if (!check.test()) {
        console.error(`❌ ${check.name}: ${check.error}`);
        hasErrors = true;
      } else {
        console.log(`✅ ${check.name}: OK`);
      }
    } catch (error) {
      console.error(`❌ ${check.name}: ${error.message}`);
      hasErrors = true;
    }
  }
  
  if (hasErrors) {
    console.error('\n🚨 Data validation failed! Please fix the issues above.');
    process.exit(1);
  } else {
    console.log('\n🎉 Data validation passed!');
  }
  
} catch (error) {
  console.error('❌ Error reading data file:', error.message);
  process.exit(1);
}
