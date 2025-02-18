import { useState } from 'react';
import { XCircle } from 'lucide-react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Asociado } from '../../types/asociados';
import ActiCultural from '../Actividades/Cultural/Cultural';
import ActiDeportiva from '../Actividades/Deportiva/Deportiva';
import ActiEducativo from '../Actividades/Educativa/Educativa';
import DatosSociales from '../Sociales/ListarDatosSociales';

interface EstadoAsociadoModalProps {
  open: boolean;
  onClose: () => void;
  asociado: Asociado;
}

type Seccion = 'cultural' | 'deportiva' | 'educativa' | 'sociales' | 'menu';

function EstadoAsociadoModal({ open, onClose, asociado }: EstadoAsociadoModalProps) {
  const [seccionActual, setSeccionActual] = useState<Seccion>('menu');

  const renderSeccion = () => {
    switch (seccionActual) {
      case 'cultural':
        return <ActiCultural asociado={asociado} />;
      case 'deportiva':
        return <ActiDeportiva asociado={asociado} />;
      case 'educativa':
        return <ActiEducativo asociado={asociado} />;
      case 'sociales':
        return <DatosSociales asociado={asociado} />;
      default:
        return (
          <List>
            {[
              { nombre: 'Actividad Cultural', ruta: 'cultural' },
              { nombre: 'Actividad Deportiva', ruta: 'deportiva' },
              { nombre: 'Actividad Educativa', ruta: 'educativa' },
              { nombre: 'Datos Sociales', ruta: 'sociales' },
            ].map((seccion, index) => (
              <ListItem
                key={index}
                component="div"
                role="button"
                onClick={() => setSeccionActual(seccion.ruta as Seccion)}
                sx={{
                  '&:hover': { backgroundColor: '#f5f5f5' },
                  borderRadius: 1,
                  mb: 1,
                  cursor: 'pointer'
                }}
              >
                <ListItemText
                  primary={seccion.nombre}
                  primaryTypographyProps={{
                    variant: 'body1',
                    fontWeight: 'medium'
                  }}
                />
              </ListItem>
            ))}
          </List>
        );
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="estado-asociado-dialog-title"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle id="estado-asociado-dialog-title">
        {seccionActual === 'menu'
          ? `Estado del Asociado: ${asociado.name}`
          : (
            <button
              onClick={() => setSeccionActual('menu')}
              className="text-blue-600 hover:text-blue-800"
            >
              ← Volver
            </button>
          )}
      </DialogTitle>

      <DialogContent dividers>
        {renderSeccion()}
      </DialogContent>

      <DialogActions>
        <IconButton
          onClick={onClose}
          color="primary"
          sx={{ mr: 2, mb: 1 }}
        >
          <XCircle size={24} />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}

export default EstadoAsociadoModal;
