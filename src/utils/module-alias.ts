import * as path from 'path'
import moduleAlias from 'module-alias'

const files = path.resolve(__dirname, '../..')

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
  '@entities': path.join(files, 'src', 'entities'),
  '@dtos': path.join(files, 'src', 'dtos'),
  '@repositories': path.join(files, 'src', 'repositories'),
  '@migrations': path.join(files, 'src', 'migrations'),
  '@useCases': path.join(files, 'src', 'useCases'),
  '@errors': path.join(files, 'src', 'errors'),
  '@presenters': path.join(files, 'src', 'presenters'),
  '@validations': path.join(files, 'src', 'validations'),
  '@utils': path.join(files, 'src', 'utils')
})
